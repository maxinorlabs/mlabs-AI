#!/usr/bin/env bash
# Verify mlabs.co.in after (or just before) the move from Webflow to Cloud Run.
#
#   scripts/cutover-check.sh               check the live domain (after the DNS switch)
#   scripts/cutover-check.sh --ip 1.2.3.4  test the new load balancer on the real domain before switching DNS
#   scripts/cutover-check.sh --site URL    run only the app checks against any URL (e.g. the Cloud Run URL)
#
# Exit code is the number of failed checks. The contact form is not submitted (it emails admin@mlabs.co.in).
#
# Rollback values (Webflow, as of 2026-09-29): @ A 198.202.211.1, www CNAME cdn.webflow.com

DOMAIN=mlabs.co.in
IP=""
SITE=""
while [ $# -gt 0 ]; do
  case "$1" in
    --ip) IP="$2"; shift 2 ;;
    --site) SITE="${2%/}"; shift 2 ;;
    *) echo "unknown option: $1"; exit 2 ;;
  esac
done

BASE=${SITE:-https://$DOMAIN}
RESOLVE=()
[ -n "$IP" ] && RESOLVE=(--resolve "$DOMAIN:443:$IP" --resolve "www.$DOMAIN:443:$IP" --resolve "$DOMAIN:80:$IP" --resolve "www.$DOMAIN:80:$IP")
fails=0

pass() { printf '  \033[32mPASS\033[0m %s\n' "$1"; }
fail() { printf '  \033[31mFAIL\033[0m %s\n' "$1"; fails=$((fails + 1)); }
info() { printf '  ---- %s\n' "$1"; }
check() { if eval "$2"; then pass "$1"; else fail "$1"; fi; }

req() { curl -s -m 30 "${RESOLVE[@]}" "$@"; }
code() { req -o /dev/null -w '%{http_code}' "$1"; }
location() { req -o /dev/null -w '%{redirect_url}' "$1"; }
headers() { req -D - -o /dev/null "$1"; }
dns() {
  curl -s -m 15 "https://dns.google/resolve?name=$1&type=$2" | python3 -c '
import sys, json
t = {"A": 1, "CNAME": 5, "MX": 15, "TXT": 16}[sys.argv[1]]
print(" ".join(sorted(a["data"] for a in json.load(sys.stdin).get("Answer", []) if a.get("type") == t)))' "$2"
}

if [ -z "$SITE" ]; then
  echo "DNS"
  if [ -z "$IP" ]; then
    apex=$(dns $DOMAIN A); www=$(dns www.$DOMAIN A); wwwc=$(dns www.$DOMAIN CNAME)
    info "@ A: ${apex:-none} | www A: ${www:-none} | www CNAME: ${wwwc:-none}"
    check "@ no longer points to Webflow" '[ -n "$apex" ] && [[ "$apex" != *198.202.211.1* ]]'
    check "www no longer points to Webflow" '[[ "$wwwc" != *webflow* ]] && [[ "$www" != *198.202.211.1* ]]'
  else
    info "testing load balancer $IP without DNS (--resolve)"
  fi
  mx=$(dns $DOMAIN MX); txt=$(dns $DOMAIN TXT)
  check "email MX records still Google Workspace" '[[ "$mx" == *aspmx.l.google.com* ]]'
  check "SPF record still present" '[[ "$txt" == *v=spf1* ]]'
  check "Google site verification still present" '[[ "$txt" == *google-site-verification* ]]'

  echo "HTTPS and redirects"
  check "https://$DOMAIN/ returns 200" '[ "$(code https://$DOMAIN/)" = 200 ]'
  check "SSL certificate valid for $DOMAIN" 'req -o /dev/null https://$DOMAIN/'
  check "SSL certificate valid for www.$DOMAIN" 'req -o /dev/null https://www.$DOMAIN/'
  check "www redirects to https://$DOMAIN/" '[[ "$(location https://www.$DOMAIN/)" == https://$DOMAIN/* ]]'
  check "http redirects to https" '[[ "$(location http://$DOMAIN/)" == https://$DOMAIN/* ]]'
fi

echo "Served by the new app (not Webflow)"
h=$(headers "$BASE/")
check "Next.js responds" 'grep -qi "^x-powered-by: Next.js" <<<"$h"'
check "not Webflow/Cloudflare hosting" '! grep -qiE "^(x-wf-region|x-opennext|cf-ray):" <<<"$h"'
check "no password prompt" '! grep -qi "^www-authenticate" <<<"$h"'
check "no noindex header" '! grep -qi "^x-robots-tag:.*noindex" <<<"$h"'

echo "Pages"
for p in / /team /contact /sectors /startups /blog /blog/why-indian-Venture-fail-at-scale /privacy; do
  check "$p returns 200" '[ "$(code "$BASE$p")" = 200 ]'
done

echo "Old addresses redirect"
check "/home -> /" '[[ "$(location "$BASE/home")" == "$BASE/" ]]'
check "/home/team -> /team" '[[ "$(location "$BASE/home/team")" == "$BASE/team" ]]'
check "/team/samir-gupta -> /team" '[[ "$(location "$BASE/team/samir-gupta")" == "$BASE/team" ]]'

echo "Search engines"
home=$(req "$BASE/")
robots=$(req "$BASE/robots.txt")
check "page has no noindex tag" '! grep -q "noindex" <<<"$home"'
check "robots.txt allows crawling" 'grep -q "^Allow: /" <<<"$robots" && ! grep -q "^Disallow: /$" <<<"$robots"'
check "sitemap 0 loads" '[ "$(code "$BASE/sitemap/0.xml")" = 200 ]'
check "sitemap 1 loads" '[ "$(code "$BASE/sitemap/1.xml")" = 200 ]'

echo "Images and analytics"
imgs=$(for p in / /team; do req "$BASE$p" | grep -oE '/_next/image\?url=[^"& ]+&amp;w=640&amp;q=[0-9]+' ; done | sed 's/&amp;/\&/g' | sort -u)
broken=0; n=0
for i in $imgs; do n=$((n + 1)); [ "$(code "$BASE$i")" = 200 ] || broken=$((broken + 1)); done
check "images on / and /team load ($n checked)" '[ "$n" -gt 0 ] && [ "$broken" = 0 ]'
check "Google Analytics tag present" 'grep -q "G-W4B4Z3JZLC" <<<"$home"'
check "Tag Manager present" 'grep -q "GTM-NKV82HD9" <<<"$home"'

echo
if [ "$fails" = 0 ]; then echo "All checks passed."; else echo "$fails check(s) failed."; fi
echo "Manual: submit the contact form once (tell Shilpa first) and check Google Analytics real-time."
exit "$fails"
