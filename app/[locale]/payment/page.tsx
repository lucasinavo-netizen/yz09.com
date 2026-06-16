import { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "payment" });
  const canonical = getCanonicalUrl('/payment', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/payment'),
    },
    openGraph: {
      title: t("heading"),
      description: t("description"),
      url: canonical,
    },
  };
}

const paymentMethodKeys = ["kbzPay", "waveMoney", "cbPay", "ayaPay", "visaMastercard"];
const paymentMethodIcons = ["💳", "📱", "🏦", "💼", "💳"];
const paymentMethodNames = ["KBZ Pay", "Wave Money", "CB Pay", "AYA Pay", "Visa / Mastercard"];
const paymentMethodLimits = [
  { min: "1000 MMK", max: "10,000,000 MMK", timeKey: "processingTimeInstant" },
  { min: "1000 MMK", max: "5,000,000 MMK", timeKey: "processingTimeInstant" },
  { min: "2000 MMK", max: "20,000,000 MMK", timeKey: "processingTime5_15" },
  { min: "1000 MMK", max: "10,000,000 MMK", timeKey: "processingTimeInstant" },
  { min: "5,000 MMK", max: "50,000,000 MMK", timeKey: "processingTime10_30" }
];

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export default async function PaymentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const t = await getTranslations({ locale, namespace: "payment" });

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
          {paymentMethodKeys.map((methodKey, index) => {
            const methodData = t.raw(`paymentMethods.${methodKey}`);
            return (
              <div
                key={methodKey}
                className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest hover:border-gold/50 transition-all card-hover"
              >
                <div className="text-5xl mb-4 text-center">{paymentMethodIcons[index]}</div>
                <h2 className="text-2xl font-bold text-white mb-2">{paymentMethodNames[index]}</h2>
                <p className="text-gray-400 mb-4">{methodData.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm text-gray-400">{t("maxAmount")}:</span>
                    <span className="text-gold font-semibold ml-2">{paymentMethodLimits[index].max}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">{t("time")}:</span>
                    <span className="text-gold font-semibold ml-2">{t(paymentMethodLimits[index].timeKey)}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {methodData.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{t("withdrawal")}</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              {t("withdrawalDescription")}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("maxWithdrawal")}</li>
              <li>{t("withdrawalTime")}</li>
              <li>{t("noTax")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("startDepositing")}
          </h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

