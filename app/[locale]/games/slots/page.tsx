import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const canonical = getCanonicalUrl('/games/slots', locale);

  return {
    title: t("slotsTitle"),
    description: t("slotsDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/games/slots'),
    },
    openGraph: {
      title: t("slotsTitle"),
      description: t("slotsDescription"),
      type: 'website',
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

export default async function SlotsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  
  const slotsGames = gamesData.filter((game: any) => game.category === 'slots');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">{tCommon("games")}</Link>
          <span>/</span>
          <span className="text-white">{t("slotsBreadcrumbSlots")}</span>
        </nav>

        {/* H1 Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">{t("slotsHeading")}</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          {t("slotsSubheading")}
        </p>

        {/* Content Description */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("slotsAboutTitle")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("slotsAboutDescription")}
          </p>
        </div>

        {/* 遊戲列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {slotsGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Slot Game`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                  {game.hot && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      🔥 HOT
                    </div>
                  )}
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold mb-1 line-clamp-1">{game.nameMm}</h3>
                <p className="text-gray-400 text-sm mb-2">{game.provider}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gold">RTP: {game.rtp}%</span>
                  <span className="text-gray-500">Max: {game.maxWin}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("slotsCTA")}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("slotsCTADescription")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

