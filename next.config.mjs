import path from 'path';
import { fileURLToPath } from 'url';
import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.mm7.tech', pathname: '/wp-content/uploads/**' },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.json');
    return config;
  },
  async rewrites() {
    return [
      // Serve default locale at root so / returns 200 (indexable); avoids "page redirects" in Search Console
      { source: '/', destination: '/my' },
    ];
  },
  async redirects() {
    return [
      // Affiliate cloaking — hide operator URL/ID from Google. Disallowed in robots.txt.
      { source: '/go/y', destination: 'https://www.mm38aa.com/m/home?affiliateCode=lu0001', permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

