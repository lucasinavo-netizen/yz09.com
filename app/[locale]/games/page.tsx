import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CTAButton from "@/components/ui/CTAButton";
import FeaturedGames from "@/components/sections/FeaturedGames";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gamesPage" });
  const canonical = getCanonicalUrl('/games', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/games'),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonical,
      locale: locale === 'my' ? 'my_MM' : 'en_US',
    },
  };
}

const brandLinks = [
  "/go/y2",
  "/go/y",
  "/go/y2",
];

const gameCategoryKeys = ["slots", "liveCasino", "sportsBetting", "fishing", "poker", "lottery"];
const gameCategoryIcons = ["🎰", "🎲", "⚽", "🎣", "🃏", "🎫"];

export default async function GamesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gamesPage" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tGames = await getTranslations({ locale, namespace: "games" });
  
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        {/* Featured Games Section */}
        <div className="mb-12">
          {/* <FeaturedGames /> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gameCategoryKeys.map((categoryKey, index) => {
            const category = t.raw(`categories.${categoryKey}`);
            return (
              <div
                key={categoryKey}
                className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest hover:border-gold/50 transition-all card-hover"
              >
                <div className="text-5xl mb-4 text-center">{gameCategoryIcons[index]}</div>
                <h2 className="text-2xl font-bold text-white mb-2">{category.nameMm}</h2>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href={randomBrandLink}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  {t("playGame")}
                </CTAButton>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("startPlaying")}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("startPlayingDescription")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

