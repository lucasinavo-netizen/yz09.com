import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotionsPage" });
  const canonical = getCanonicalUrl('/promotions', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/promotions'),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

const promotionCards = [
  {
    key: "welcomeBonus",
    href: "/promotions/welcome-bonus",
    highlight: "100%",
  },
  {
    key: "dailyBonus",
    href: "/promotions/daily-bonus",
    highlight: "10-20%",
  },
  {
    key: "vipProgram",
    href: "/promotions/vip-program",
    highlight: "VIP",
  },
];

const contentSections = [
  { key: "sportsBetting", icon: "⚽", image: "/images/promotions/sports-betting-banner.webp" },
  { key: "slotsFishing", icon: "🎰", image: "/images/promotions/slot-games-banner.webp" },
  { key: "onlineCasino", icon: "🎲", image: "/images/promotions/fishing-banner.webp" },
  { key: "liveCasino", icon: "🃏", image: "/images/promotions/live-casino-banner.webp" },
  { key: "cockfight", icon: "🐓", image: "/images/promotions/cockfight-banner.webp" },
  { key: "trustedSite", icon: "🛡️", image: "/images/promotions/vip-program-banner.webp" },
];

export default async function PromotionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotionsPage" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <span className="text-white">{t("heading")}</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/promotions/promotion-banner.webp"
            alt={t("heading")}
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent flex flex-col justify-end p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              <span className="gradient-gold">{t("heading")}</span>
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-2xl">
              {t("subheading")}
            </p>
          </div>
        </div>

        {/* Promotion Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {promotionCards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-6 border border-gold/20 hover:border-gold/50 transition-all duration-300 group text-center"
            >
              <div className="text-4xl font-bold text-gold mb-3">{card.highlight}</div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {t(`cards.${card.key}.title`)}
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                {t(`cards.${card.key}.description`)}
              </p>
              <span className="text-gold text-sm font-semibold">
                {t("learnMore")} →
              </span>
            </Link>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8 mb-12">
          {contentSections.map((section, index) => (
            <div key={section.key} className="bg-dark-lighter rounded-xl overflow-hidden">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-2/5 relative">
                  <Image
                    src={section.image}
                    alt={t(`sections.${section.key}.title`)}
                    width={480}
                    height={320}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-white">
                      {t(`sections.${section.key}.title`)}
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t(`sections.${section.key}.text1`)}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`sections.${section.key}.text2`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("ctaHeading")}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("ctaText")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
