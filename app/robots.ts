import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yz09.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Do not disallow /_next/ — Google needs /_next/static/ and /_next/image to render pages
        disallow: ['/api/', '/admin/', '/go/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

