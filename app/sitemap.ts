import { MetadataRoute } from 'next';
import casinosEn from '@/data/casinos-en.json';
import { defaultLocale } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'https://yz09.com').replace(/\/+$/, '');

  const createUrl = (path: string, locale: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (locale === defaultLocale) {
      return `${baseUrl}${cleanPath}`;
    }
    return `${baseUrl}/${locale}${cleanPath}`;
  };

  const languageAlternates = (path: string): Record<string, string> => ({
    'my-MM': createUrl(path, 'my'),
    'en-US': createUrl(path, 'en'),
  });

  const createSitemapEntry = (
    path: string,
    lastModified: Date = new Date(),
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly',
    priority: number = 0.8
  ): MetadataRoute.Sitemap[0] => ({
    url: createUrl(path, defaultLocale),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: languageAlternates(path),
    },
  });

  const staticPages: MetadataRoute.Sitemap = [
    createSitemapEntry('', new Date(), 'daily', 1),
    createSitemapEntry('/compare', new Date(), 'weekly', 0.9),
    createSitemapEntry('/bonuses', new Date(), 'weekly', 0.8),
    createSitemapEntry('/games', new Date(), 'weekly', 0.8),
    createSitemapEntry('/payment', new Date(), 'monthly', 0.7),
    createSitemapEntry('/guide', new Date(), 'monthly', 0.7),
    createSitemapEntry('/review/top-myanmar-casinos', new Date(), 'daily', 0.9),
    createSitemapEntry('/promotions', new Date(), 'weekly', 0.9),
    createSitemapEntry('/promotions/welcome-bonus', new Date(), 'weekly', 0.9),
    createSitemapEntry('/promotions/daily-bonus', new Date(), 'weekly', 0.8),
    createSitemapEntry('/promotions/vip-program', new Date(), 'monthly', 0.8),
    createSitemapEntry('/guide/how-to-play', new Date(), 'monthly', 0.8),
    createSitemapEntry('/guide/payment-methods', new Date(), 'monthly', 0.8),
    createSitemapEntry('/guide/responsible-gaming', new Date(), 'monthly', 0.7),
  ];

  const casinoPages: MetadataRoute.Sitemap = casinosEn.map((casino: { slug: string }) =>
    createSitemapEntry(`/review/${casino.slug}`, new Date(), 'weekly', 0.8)
  );

  const gameCategoryPaths = ['/games/slots', '/games/live-casino', '/games/fishing', '/games/fishing-apk', '/games/table-games'];
  const gameCategoryPages: MetadataRoute.Sitemap = gameCategoryPaths.map((path) =>
    createSitemapEntry(path, new Date(), 'weekly', 0.9)
  );

  return [
    ...staticPages,
    ...casinoPages,
    ...gameCategoryPages,
    // gamePages + blogPostPages + blogListPage removed — 74 thin/unindexed pages (0 impr in 90d).
    // Pages get robots:noindex via generateMetadata for active deindexing.
  ];
}
