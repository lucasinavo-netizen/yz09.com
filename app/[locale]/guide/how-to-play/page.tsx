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
  const t = await getTranslations({ locale, namespace: "guideHowToPlay" });
  const canonical = getCanonicalUrl('/guide/how-to-play', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/guide/how-to-play'),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

export default async function HowToPlayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guideHowToPlay" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tGames = await getTranslations({ locale, namespace: "games" });
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-gold">{tCommon("guide")}</Link>
          <span>/</span>
          <span className="text-white">{t("heading")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="space-y-8 mb-8">
          {/* 步驟 1 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">1.</span> {t("step1.title")}
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step1.step1")}</li>
              <li>{t("step1.step2")}</li>
              <li>{t("step1.step3")}</li>
              <li>{t("step1.step4")}</li>
              <li>{t("step1.step5")}</li>
            </ol>
          </div>

          {/* 步驟 2 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">2.</span> {t("step2.title")}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("step2.text")}
            </p>
          </div>

          {/* 步驟 3 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">3.</span> {t("step3.title")}
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step3.step1")}</li>
              <li>{t("step3.step2")}</li>
              <li>{t("step3.step3")}</li>
              <li>{t("step3.step4")}</li>
              <li>{t("step3.step5")}</li>
              <li>{t("step3.step6")}</li>
            </ol>
            <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-gold font-bold mb-2">💡 {t("step3.tipLabel")}:</p>
              <p className="text-gray-300 text-sm">
                {t("step3.tip")}
              </p>
            </div>
          </div>

          {/* 步驟 4 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">4.</span> {t("step4.title")}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("step4.text")}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link href="/games/slots" className="bg-dark rounded-lg p-4 hover:border-gold/50 border border-dark-lightest transition-all">
                <div className="text-gold font-bold mb-1">{tGames("slots")}</div>
              </Link>
              <Link href="/games/live-casino" className="bg-dark rounded-lg p-4 hover:border-gold/50 border border-dark-lightest transition-all">
                <div className="text-gold font-bold mb-1">{tGames("liveCasino")}</div>
              </Link>
            </div>
          </div>

          {/* 步驟 5 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">5.</span> {t("step5.title")}
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step5.step1")}</li>
              <li>{t("step5.step2")}</li>
              <li>{t("step5.step3")}</li>
              <li>{t("step5.step4")}</li>
              <li>{t("step5.step5")}</li>
            </ol>
          </div>

          {/* 步驟 6 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">6.</span> {t("step6.title")}
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step6.step1")}</li>
              <li>{t("step6.step2")}</li>
              <li>{t("step6.step3")}</li>
              <li>{t("step6.step4")}</li>
              <li>{t("step6.step5")}</li>
              <li>{t("step6.step6")}</li>
            </ol>
          </div>

          {/* 常見錯誤 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("commonMistakes.title")}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">{t("commonMistakes.mistake1.title")}</h3>
                <p className="text-gray-300">{t("commonMistakes.mistake1.solution")}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">{t("commonMistakes.mistake2.title")}</h3>
                <p className="text-gray-300">{t("commonMistakes.mistake2.solution")}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">{t("commonMistakes.mistake3.title")}</h3>
                <p className="text-gray-300">{t("commonMistakes.mistake3.solution")}</p>
              </div>
            </div>
          </div>

          {/* 安全提醒 */}
          <div className="bg-dark-lighter rounded-xl p-6 border border-red-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">🛡️ {t("securityTips.title")}</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("startNow")}</h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("startNowText")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {t("registerNow")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

