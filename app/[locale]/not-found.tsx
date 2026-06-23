import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import CTAButton from "@/components/ui/CTAButton";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const tCommon = await getTranslations("common");
  
  const brandLinks = [
    "/go/y2",
    "/go/y",
    "/go/y2",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-dark-lighter hover:bg-dark-light text-white rounded-lg font-semibold transition-colors border border-dark-lightest"
          >
            {t("backToHome")}
          </Link>
          <CTAButton href={randomBrandLink} variant="gold" size="md">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

