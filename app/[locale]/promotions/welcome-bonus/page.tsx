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
  const canonical = getCanonicalUrl('/promotions/welcome-bonus', locale);

  return {
    title: t("welcomeBonusTitle"),
    description: t("welcomeBonusDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/promotions/welcome-bonus'),
    },
    openGraph: {
      title: t("welcomeBonusTitle"),
      description: t("welcomeBonusDescription"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

export default async function WelcomeBonusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotions" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tGames = await getTranslations({ locale, namespace: "games" });
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/bonuses" className="hover:text-gold">{tCommon("bonuses")}</Link>
          <span>/</span>
          <span className="text-white">{t("welcomeBonusHeading")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("welcomeBonusHeading")}</span>
        </h1>

        {/* 獎金總覽 */}
        <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl p-8 border border-gold/30 mb-8 text-center">
          <div className="text-6xl font-bold text-gold mb-4">100%</div>
          <div className="text-3xl font-bold text-white mb-2">{t("welcomeBonusMax")}</div>
          <p className="text-gray-300 text-lg">{t("welcomeBonusSubheading")}</p>
        </div>

        {/* 內容區塊 */}
        <div className="space-y-6 mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("aboutWelcomeBonus")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("aboutWelcomeBonusText")}
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("claimRequirements")}</h2>
            <ul className="space-y-3 text-gray-300">
              {t.raw("claimRequirementsList").map((requirement: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("wageringRequirements")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("wageringRequirementsText")}
            </p>
            <div className="bg-dark rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">{t("wageringRequirements")}</div>
              <div className="text-2xl font-bold text-gold">{t("wageringMultiplier")}</div>
              <div className="text-xs text-gray-500 mt-1">{t("bonusAmountMultiplier")}</div>
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("eligibleGames")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("eligibleGamesText")}
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[tGames("slots"), tGames("liveCasino"), tGames("fishing"), tGames("tableGames")].map((game, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="text-gold">✓</span>
                  <span>{game}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("howToClaim")}</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              {t.raw("howToClaimSteps").map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("faq")}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{t("faqWhenReceived")}</h3>
                <p className="text-gray-300">{t("faqWhenReceivedAnswer")}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{t("faqHowToUse")}</h3>
                <p className="text-gray-300">{t("faqHowToUseAnswer")}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{t("faqHowToWithdraw")}</h3>
                <p className="text-gray-300">{t("faqHowToWithdrawAnswer")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("claimWelcomeBonus")}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("claimWelcomeBonusText")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

