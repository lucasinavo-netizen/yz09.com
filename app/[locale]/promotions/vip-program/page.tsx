import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getTranslations } from "next-intl/server";

import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotions" });
  const canonical = getCanonicalUrl('/promotions/vip-program', locale);

  return {
    title: t("vipProgramTitle"),
    description: t("vipProgramDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/promotions/vip-program'),
    },
    openGraph: {
      title: t("vipProgramHeading"),
      description: t("vipProgramDescription"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

const vipLevelKeys = ["bronze", "silver", "gold", "platinum", "diamond"];
const vipLevelNames = ["Bronze", "Silver", "Gold", "Platinum", "Diamond"];

export default async function VIPProgramPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <span className="text-white">{t("vipProgramHeading")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("vipProgramHeading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("aboutVipProgram")}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("aboutVipProgramText")}
          </p>
        </div>

        {/* VIP 等級 */}
        <div className="space-y-6 mb-8">
          {vipLevelKeys.map((levelKey, index) => {
            const levelData = t.raw(`vipLevels.${levelKey}`);
            return (
              <div key={levelKey} className="bg-dark-lighter rounded-xl p-6 border border-gold/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gold">{levelData.nameMm} | {vipLevelNames[index]}</h3>
                  <div className="text-sm text-gray-400">{levelData.requirements}</div>
                </div>
                <ul className="space-y-2">
                  {levelData.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-gold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* VIP 福利詳情 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("vipExclusiveBenefits")}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">{t("higherRebate")}</h4>
              <p className="text-gray-300 text-sm">{t("higherRebateText")}</p>
            </div>
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">{t("priorityWithdrawal")}</h4>
              <p className="text-gray-300 text-sm">{t("priorityWithdrawalText")}</p>
            </div>
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">{t("personalService")}</h4>
              <p className="text-gray-300 text-sm">{t("personalServiceText")}</p>
            </div>
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">{t("birthdayGift")}</h4>
              <p className="text-gray-300 text-sm">{t("birthdayGiftText")}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("joinVipProgram")} {tCommon("joinVipProgram")}</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

