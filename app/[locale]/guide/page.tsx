import { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guide" });
  const canonical = getCanonicalUrl('/guide', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/guide'),
    },
    openGraph: {
      title: t("heading"),
      description: t("description"),
      url: canonical,
    },
  };
}

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const t = await getTranslations({ locale, namespace: "guide" });

  const guides = [
    {
      key: "accountOpening",
      icon: "📝",
    },
    {
      key: "deposit",
      icon: "💰",
    },
    {
      key: "playingGames",
      icon: "🎮",
    },
    {
      key: "withdrawal",
      icon: "💳",
    },
  ];

  const tips = [
    {
      key: "tipBonus",
      icon: "💡",
    },
    {
      key: "tipRTP",
      icon: "🎯",
    },
    {
      key: "tipResponsible",
      icon: "⚖️",
    },
    {
      key: "tipSecurity",
      icon: "🔒",
    },
  ];

  const faqItems = ["faq1", "faq2", "faq3"];

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

        {/* Step by Step Guides */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide, index) => (
            <div
              key={guide.key}
              className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {index + 1}
                </span>
                {t(`${guide.key}.title`)}
              </h2>
              <ol className="space-y-4">
                {[1, 2, 3, 4, 5].map((stepNum) => (
                  <li key={stepNum} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 mt-0.5">
                      {stepNum}
                    </span>
                    <span className="text-gray-300">{t(`${guide.key}.step${stepNum}`)}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="gradient-gold">{t("tips")}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.key}
                className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest hover:border-gold/50 transition-colors"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`${tip.key}.title`)}</h3>
                <p className="text-gray-300">{t(`${tip.key}.content`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {t("faq")}
          </h2>
          <div className="space-y-6">
            {faqItems.map((faqKey) => (
              <div key={faqKey}>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(`${faqKey}.question`)}
                </h3>
                <p className="text-gray-300">
                  {t(`${faqKey}.answer`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("readyToStart")}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("readyToStartDescription")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

