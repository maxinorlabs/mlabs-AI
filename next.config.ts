import type { NextConfig } from 'next';
import { normalizeBasePath } from './lib/site-path';

const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.WEBFLOW_BASE_PATH ?? '',
);

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/domains', destination: '/sectors', permanent: true },
      { source: '/domains/bfsi', destination: '/sectors/bfsi', permanent: true },
      { source: '/domains/media', destination: '/sectors/media', permanent: true },
      { source: '/domains/d2c', destination: '/sectors/d2c', permanent: true },
      { source: '/domains/healthcare', destination: '/sectors/healthcare', permanent: true },
      { source: '/domains/education', destination: '/sectors/education', permanent: true },
      { source: '/domains/marketing', destination: '/sectors/marketing', permanent: true },
      { source: '/domains/legal', destination: '/sectors/legal', permanent: true },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, { dev }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify; file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
