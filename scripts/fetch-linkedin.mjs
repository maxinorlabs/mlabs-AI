import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const FEEDS_PATH = join(ROOT, 'content', 'linkedin-feeds.json');
const CACHE_PATH = join(ROOT, 'content', 'linkedin-posts-cache.json');

const feeds = JSON.parse(readFileSync(FEEDS_PATH, 'utf-8'));

// Load existing cache (keyed by handle → posts[])
const existingCache = existsSync(CACHE_PATH)
  ? JSON.parse(readFileSync(CACHE_PATH, 'utf-8'))
  : {};

async function fetchFeed(rssUrl) {
  try {
    const res = await fetch(rssUrl, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.items ?? []).map((item) => ({
      id: item.id,
      url: item.url,
      text: item.content_text ?? '',
      image: item.image ?? null,
      date: item.date_published,
    }));
  } catch (err) {
    return null;
  }
}

function mergePosts(existing = [], fresh = []) {
  const map = new Map(existing.map((p) => [p.id, p]));
  for (const post of fresh) map.set(post.id, post); // fresh wins on conflict
  return [...map.values()].sort((a, b) => new Date(b.date) - new Date(a.date));
}

const updatedCache = { ...existingCache };
let fetched = 0;
let skipped = 0;

for (const profile of feeds) {
  if (!profile.rssUrl) {
    skipped++;
    continue;
  }

  process.stdout.write(`Fetching ${profile.name}... `);
  const fresh = await fetchFeed(profile.rssUrl);

  if (fresh === null) {
    console.log(`FAILED (keeping ${(updatedCache[profile.handle] ?? []).length} cached posts)`);
    skipped++;
    continue;
  }

  const existing = updatedCache[profile.handle] ?? [];
  updatedCache[profile.handle] = mergePosts(existing, fresh);
  console.log(`OK — ${fresh.length} fetched, ${updatedCache[profile.handle].length} total cached`);
  fetched++;
}

writeFileSync(CACHE_PATH, JSON.stringify(updatedCache, null, 2));
console.log(`\nDone. ${fetched} feeds updated, ${skipped} skipped. Cache written to content/linkedin-posts-cache.json`);
