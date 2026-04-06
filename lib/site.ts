import { configuredBasePath, withBasePath } from './site-path';

const DEFAULT_SITE_URL = 'https://mlabs.co.in';

function normalizeSiteUrl(value?: string | null) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  return withProtocol.replace(/\/+$/, '');
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL,
);

export function buildSiteUrl(pathname = '/') {
  const path =
    pathname === '/'
      ? configuredBasePath || '/'
      : withBasePath(pathname, configuredBasePath);
  const url = new URL(path || '/', `${SITE_URL}/`).toString();

  if (pathname !== '/' && url.endsWith('/')) {
    return url.slice(0, -1);
  }

  return url;
}

export const METADATA_BASE = new URL(buildSiteUrl('/'));
