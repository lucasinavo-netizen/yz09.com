import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLinks = [
  "/go/y2",
  "/go/y",
  "/go/y2",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const canonical = getCanonicalUrl('/games/table-games', locale);

  return {
    title: t("tableGamesTitle"),
    description: t("tableGamesDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/games/table-games'),
    },
    openGraph: {
      title: t("tableGamesTitle"),
      description: t("tableGamesDescription"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

export default async function TableGamesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tableGames = gamesData.filter((game: any) => game.category === 'table-games');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">{tCommon("games")}</Link>
          <span>/</span>
          <span className="text-white">{t("tableGames")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">{t("tableGamesHeading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("tableGamesHeading")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("tableGamesSubheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tableGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Table Game`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold mb-1">{game.nameMm}</h3>
                <p className="text-gray-400 text-sm">{game.provider}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("tableGamesHeading")}</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

