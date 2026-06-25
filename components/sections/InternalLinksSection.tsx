"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function InternalLinksSection() {
  const t = useTranslations("internalLinks");
  const tGames = useTranslations("games");
  const tCommon = useTranslations("common");
  const tPromotions = useTranslations("promotions");
  const tBlog = useTranslations("blog");

  const linkCategories = [
    {
      title: `${t("games")}`,
      links: [
        { href: "/games/slots", label: `${tGames("slots")}` },
        { href: "/games/live-casino", label: `${tGames("liveCasino")}` },
        { href: "/games/fishing", label: `${tGames("fishing")}` },
        { href: "/games/table-games", label: `${tGames("tableGames")}` },
      ]
    },
    {
      title: `${t("bonuses")}`,
      links: [
        { href: "/promotions/welcome-bonus", label: `${tPromotions("welcomeBonusHeading")}` },
        { href: "/promotions/daily-bonus", label: `${tPromotions("dailyBonusHeading")}` },
        { href: "/promotions/vip-program", label: `${tPromotions("vipProgramHeading")}` },
        { href: "/bonuses", label: `${tCommon("bonuses")}` },
      ]
    },
    {
      title: t("guides"),
      links: [
        { href: "/guide/how-to-play", label: t("howToPlay") },
        { href: "/guide/payment-methods", label: t("paymentMethods") },
        { href: "/guide/responsible-gaming", label: t("responsibleGaming") },
        { href: "/guide", label: t("allGuides") },
      ]
    },
    {
      title: t("blog"),
      links: [
        { href: "/blog", label: tBlog("heading") },
        { href: "/games/slots", label: t("top10Slots") },
        { href: "/review/top-myanmar-casinos", label: t("chooseCasino") },
        { href: "/games/live-casino", label: t("pragmaticGuide") },
      ]
    }
  ];

  return (
    <section className="py-16 bg-dark-lighter border-t border-dark-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>
            {/* <span className="text-white"> | Useful Links</span> */}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {linkCategories.map((category, index) => (
            <div key={index} className="bg-dark rounded-xl p-6 border border-dark-lightest">
              <h3 className="text-xl font-bold text-gold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="text-gold">→</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
