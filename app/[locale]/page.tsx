import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import FeaturedGames from "@/components/sections/FeaturedGames";
import LatestBonuses from "@/components/sections/LatestBonuses";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import FAQ from "@/components/sections/FAQ";
import { getBaseUrl, getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    verification: {
      other: {
        "msvalidate.01": "F31A3989097533BDEBEE5C6AB2C37732",
      },
    },
    robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getCanonicalUrl('', locale),
      languages: getAlternateLanguages(''),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getCanonicalUrl('', locale),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCasinos />
      <FeaturedGames />
      <LatestBonuses />
      <InternalLinksSection />
      <FAQ />
        
    </div>
  );
}
