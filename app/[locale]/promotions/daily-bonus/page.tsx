import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotions" });
  const canonical = getCanonicalUrl('/promotions/daily-bonus', locale);

  return {
    title: t("dailyBonusTitle"),
    description: t("dailyBonusDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/promotions/daily-bonus'),
    },
    openGraph: {
      title: t("dailyBonusTitle"),
      description: t("dailyBonusDescription"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

export default async function DailyBonusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotions" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/bonuses" className="hover:text-gold">{tCommon("bonuses")}</Link>
          <span>/</span>
          <span className="text-white">{t("dailyBonusHeading")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("dailyBonusHeading")}</span>
        </h1>

        <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl p-8 border border-gold/30 mb-8 text-center">
          <div className="text-4xl font-bold text-gold mb-4">{t("dailyBonusPercent")}</div>
          <div className="text-2xl font-bold text-white mb-2">{t("dailyBonusSubheading")}</div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("aboutDailyBonus")}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t("aboutDailyBonusText")}
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("timeAndRequirements")}</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">🕐</span>
                <span>{t("claimTime")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">💰</span>
                <span>{t("minDeposit")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">📅</span>
                <span>{t("oncePerDay")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("wageringRequirementsDaily")}</h2>
            <p className="text-gray-300 mb-4">
              {t("wageringTextDaily")}
            </p>
            <div className="bg-dark rounded-lg p-4">
              <div className="text-2xl font-bold text-gold">{t("wageringMultiplierDaily")}</div>
              <div className="text-sm text-gray-400 mt-1">{t("bonusAmount")}</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("claimDailyBonus")}</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

