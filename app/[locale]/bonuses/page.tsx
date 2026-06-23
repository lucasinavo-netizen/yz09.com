import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BonusCard from "@/components/ui/BonusCard";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";
import { getCasinos } from "@/lib/get-casinos";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bonuses" });
  const canonical = getCanonicalUrl('/bonuses', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/bonuses'),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonical,
      locale: locale === 'my' ? 'my_MM' : 'en_US',
    },
  };
}

export default async function BonusesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bonuses" });
  const casinos = getCasinos(locale);
  const brandLinks = [
    "/go/y",
    "/go/y2",
    "/go/y",
    "/go/y2",
    "/go/y",
    "/go/y2",
  ];

  const allBonuses = casinos.flatMap((casino) =>
    casino.bonuses.map((bonus) => ({
      ...bonus,
      ctaLink: brandLinks[Math.floor(Math.random() * brandLinks.length)],
      casinoName: casino.name,
    }))
  );

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allBonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              type={bonus.type}
              amount={bonus.amount}
              description={bonus.description}
              ctaLink={bonus.ctaLink}
              index={index}
            />
          ))}
        </div>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("howToUse")}
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              {t("howToUseDescription")}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("welcomeBonus")}</li>
              <li>{t("reloadBonus")}</li>
              <li>{t("freeSpins")}</li>
              <li>{t("vipBonus")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

