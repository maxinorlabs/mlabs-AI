export function normalizeBasePath(value?: string | null) {
  if (!value) {
    return '';
  }

  const trimmed = value.trim();

  if (!trimmed || trimmed === '/') {
    return '';
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

export function withBasePath(path: string, basePath = '') {
  if (!path.startsWith('/')) {
    return path;
  }

  const normalizedBasePath = normalizeBasePath(basePath);
  return `${normalizedBasePath}${path}`;
}

export const configuredBasePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.WEBFLOW_BASE_PATH ?? '',
);

export const clientBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? '');

