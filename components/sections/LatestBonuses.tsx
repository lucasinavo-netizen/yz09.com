"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import BonusCard from "../ui/BonusCard";
import { getCasinos } from "@/lib/get-casinos";

export default function LatestBonuses() {
  const t = useTranslations("latestBonuses");
  const locale = useLocale();
  const casinos = getCasinos(locale);
  const allBonuses = casinos.flatMap((casino) =>
    casino.bonuses.map((bonus) => ({
      ...bonus,
      ctaLink: casino.ctaLink,
      casinoName: casino.name,
    }))
  );

  const brandLinks = [
    "/go/y",
    "/go/y",
    "/go/y",
    "/go/y",
  ];

  // Merge bonuses with random brand links for variety
  const bonusesWithLinks = allBonuses.map((bonus, index) => ({
    ...bonus,
    ctaLink: brandLinks[index % brandLinks.length],
  }));

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusesWithLinks.slice(0, 6).map((bonus, index) => (
            <BonusCard
              key={index}
              type={bonus.type}
              amount={bonus.amount}
              description={bonus.description}
              ctaLink={bonus.ctaLink}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/bonuses"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

