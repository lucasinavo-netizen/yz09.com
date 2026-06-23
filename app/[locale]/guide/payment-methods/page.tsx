import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLinks = [
  "/go/y",
  "/go/y2",
  "/go/y",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guidePaymentMethods" });
  const canonical = getCanonicalUrl('/guide/payment-methods', locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/guide/payment-methods'),
    },
    openGraph: {
      title: t("heading"),
      description: t("description"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

const paymentMethodKeys = ["waveMoney", "kbzPay", "cbPay", "ayaPay", "bankTransfer"];
const paymentMethodNames = ["Wave Money", "KBZ Pay", "CB Pay", "AYA Pay", "Bank Transfer"];
const paymentMethodLimits = [
  { min: "1,000 MMK", max: "1,000,000 MMK" },
  { min: "1,000 MMK", max: "2,000,000 MMK" },
  { min: "1,000 MMK", max: "1,500,000 MMK" },
  { min: "1,000 MMK", max: "1,000,000 MMK" },
  { min: "10,000 MMK", max: "5,000,000 MMK" }
];

export default async function PaymentMethodsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  const tCommon = await getTranslations({ locale, namespace: "common" });
  const t = await getTranslations({ locale, namespace: "guidePaymentMethods" });

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

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("supportedMethods")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("supportedMethodsText")}
          </p>
        </div>

        {/* 支付方式列表 */}
        <div className="space-y-6 mb-8">
          {paymentMethodKeys.map((methodKey, index) => {
            const methodData = t.raw(`paymentMethods.${methodKey}`);
            return (
              <div key={methodKey} className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
                <h3 className="text-2xl font-bold text-gold mb-4">{methodData.nameMm} | {paymentMethodNames[index]}</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-dark rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">{t("minAmount")}</div>
                    <div className="text-lg font-bold text-white">{paymentMethodLimits[index].min}</div>
                  </div>
                  <div className="bg-dark rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">{t("maxAmount")}</div>
                    <div className="text-lg font-bold text-white">{paymentMethodLimits[index].max}</div>
                  </div>
                  <div className="bg-dark rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">{t("processingTime")}</div>
                    <div className="text-lg font-bold text-white">{methodData.processingTime} | {methodData.processingTime === "ချက်ချင်း" ? "Instant" : "1-3 hours"}</div>
                  </div>
                  <div className="bg-dark rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">{t("fee")}</div>
                    <div className="text-lg font-bold text-white">{methodData.fee} | {methodData.fee === "အခမဲ့" ? "Free" : "Depends on bank fees"}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-3">{t("depositSteps")}</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    {methodData.steps.map((step: string, idx: number) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>

        {/* 提款說明 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("withdrawal")}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("withdrawalText")}
          </p>
          <div className="bg-dark rounded-lg p-4 mt-4">
            <div className="text-sm text-gray-400 mb-1">{t("withdrawalProcessingTime")}</div>
            <div className="text-2xl font-bold text-gold">{t("withdrawalTimeValue")}</div>
            <div className="text-xs text-gray-500 mt-1">{t("processingTimeNote")}</div>
          </div>
        </div>

        {/* 安全性說明 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8 border border-green-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">🛡️ {t("security")}</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400">🔒</span>
              <span>{t("securitySsl")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">🔒</span>
              <span>{t("securityAccount")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">🔒</span>
              <span>{t("securityMonitoring")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("heading")}</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

