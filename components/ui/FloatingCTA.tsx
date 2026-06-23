"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import CTAButton from "./CTAButton";

export default function FloatingCTA() {
  const t = useTranslations("floatingCTA");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const brandLinks = [
    "/go/y2",
    "/go/y",
    "/go/y2",
    "/go/y",
    "/go/y2",
    "/go/y",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-dark-lighter border border-gold/30 rounded-xl p-4 shadow-2xl">
            <CTAButton
              href={randomBrandLink}
              variant="gold"
              size="lg"
              className="w-full"
            >
              {t("text")}
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

