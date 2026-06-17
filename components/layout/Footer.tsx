"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  return (
    <footer className="bg-casino-purple-950 border-t border-casino-purple-800/30 mt-20">
      {/* Disclaimer Banner */}
      <div className="bg-red-900/20 border-b border-red-500/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-400 mb-2">
                {t("disclaimer")}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                {t("disclaimerText")}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/responsible-gaming"
                  className="text-gold hover:underline font-semibold"
                >
                  {t("responsibleGaming")} →
                </Link>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-gold"
                >
                  {t("terms")}
                </Link>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-gold"
                >
                  {t("privacy")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t("about")}</h3>
            <p className="text-white/70 text-sm mb-4">
              {t("aboutText")}
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">💬</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {tCommon("home")}
                </Link>
              </li>
              <li>
                <Link href="/review/top-myanmar-casinos" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {tCommon("compare")}
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-white/70 hover:text-gold text-sm transition-colors">
                  Compare (EN)
                </Link>
              </li>
              <li>
                <Link href="/bonuses" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {tCommon("bonuses")}
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {tCommon("guide")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Casino Reviews */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("casinoReviews")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/review/shwe-casino" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("shweCasino")}
                </Link>
              </li>
              <li>
                <Link href="/review/888-casino" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("casino888")}
                </Link>
              </li>
              <li>
                <Link href="/review/777-casino" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("casino777")}
                </Link>
              </li>
              <li>
                <Link href="/review/win8-casino" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("win8Casino")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {t("responsibleGaming")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-gold text-sm transition-colors">
                  {tCommon("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4">{t("responsibleGambling")}</h4>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">18+</span>
                <span className="text-white/70 text-sm">{t("ageRestricted")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎰</span>
                <span className="text-white/70 text-sm">GamCare</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                <span className="text-white/70 text-sm">BeGambleAware</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} Myanmar Casino Reviews. {t("copyright")}
            </p>
            <p className="text-white/50 text-xs text-center md:text-right">
              {t("ageRestriction")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
