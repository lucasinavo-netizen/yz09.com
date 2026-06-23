"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AgeVerification() {
  const t = useTranslations("ageVerification");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (!verified) {
      setShowModal(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setShowModal(false);
  };

  const handleDeny = () => {
    window.location.href = "/go/y";
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-lighter border-2 border-gold rounded-xl p-8 max-w-md w-full text-center"
          >
            <div className="text-6xl mb-4">🎰</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-300 mb-6">
              {t("text")}
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleDeny}
                className="flex-1 px-6 py-3 bg-dark-light hover:bg-dark text-white rounded-lg transition-colors"
              >
                {t("no")}
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
              >
                {t("yes")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

