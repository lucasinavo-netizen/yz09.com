"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
];

export default function Hero() {
  const t = useTranslations("hero");

  // Fix hydration issue by only randomizing on client
  const [randomBrandLink, setRandomBrandLink] = useState(brandLinks[0]);
  
  useEffect(() => {
    setRandomBrandLink(brandLinks[Math.floor(Math.random() * brandLinks.length)]);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-casino-purple-950 via-casino-purple-800 to-casino-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-casino-purple-600/20 rounded-full blur-3xl animate-float-3d" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-casino-pink-500/20 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Content (60%) */}
          <div className="lg:col-span-3 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-gold">{t("title")}</span>
                <br />
                {t("title2")}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                {t.rich("description", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
                <br />
                <span className="text-gold font-semibold">
                  {t("description2")}
                </span>
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <CTAButton
                  href={randomBrandLink}
                  variant="gold"
                  size="lg"
                >
                  {t("playNow")}
                </CTAButton>
                <a
                  href="#casinos"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                >
                  {t("viewReviews")}
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Illustration (40%)*/}
          <div className="lg:col-span-2 relative h-64 lg:h-80">
            <Image
              src="/images/hero-casino.png"
              alt={t("image-alt")}
              width={400}
              height={400}
              className="h-full mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}