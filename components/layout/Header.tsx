"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";
import SearchBar from "../ui/SearchBar";
import LanguageSelector from "../ui/LanguageSelector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("common");

  const navLinks = [
    { href: "/", label: t("home"), icon: "🏠" },
    { href: "/review/top-myanmar-casinos", label: t("compare"), icon: "⭐" },
    { href: "/promotions", label: t("bonuses"), icon: "🎁" },
    { href: "/games", label: t("games"), icon: "🎮" },
    { href: "/blog", label: t("blog"), icon: "📝" },
    { href: "/payment", label: t("payment"), icon: "💳" },
    { href: "/guide", label: t("guide"), icon: "📖" },
  ];

  const brandLinks = [
    "/go/y",
    "/go/y",
    "/go/y",
  ];

  // Use first link as default for SSR consistency, then randomize on client
  const [randomBrandLink, setRandomBrandLink] = useState(brandLinks[0]);

  useEffect(() => {
    // Only randomize on client side after hydration
    setRandomBrandLink(brandLinks[Math.floor(Math.random() * brandLinks.length)]);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-casino-purple-950/95 backdrop-blur-md border-b border-casino-purple-800/30">
      <div className="container mx-auto px-4">
        {/* Top Row: Logo, Search, Actions */}
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative h-10 md:h-12 w-auto group-hover:opacity-90 transition-opacity">
              <Image
                src="/images/site-logo.png"
                alt="Myanmar Casino Guide"
                width={200}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <SearchBar placeholder={t("searchPlaceholder")} />
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Language Selector */}
            <div className="hidden md:block">
              <LanguageSelector variant="desktop" />
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <CTAButton
                href={randomBrandLink}
                variant="gold"
                size="sm"
              >
                {t("playNow")}
              </CTAButton>
            </div>

            {/* Mobile Search Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-white bg-casino-purple-800"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Search Bar */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <SearchBar placeholder={t("searchPlaceholder")} />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-white/10"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white bg-casino-purple-800"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <LanguageSelector 
                variant="mobile" 
                onSelect={() => setIsMenuOpen(false)} 
              />

              <div className="pt-2">
                <CTAButton
                  href={randomBrandLink}
                  variant="gold"
                  size="md"
                  className="w-full"
                >
                  {t("playNow")}
                </CTAButton>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

