"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import StarRating from "./StarRating";
import RankBadge from "./RankBadge";
import AvailabilityBadge from "./AvailabilityBadge";
import CasinoLogo from "./CasinoLogo";
import { useTranslations } from "next-intl";

interface CasinoCardProps {
  casino: {
    id: string;
    name: string;
    nameMm: string;
    slug: string;
    rating: number;
    logo: string;
    hero: string;
    excerpt: string;
    ctaLink: string;
    features: {
      games: string;
      minDeposit: string;
      withdrawalTime?: string;
      providers?: string;
    };
    bonuses?: Array<{
      type: string;
      amount: string;
      description: string;
    }>;
  };
  rank?: number;
  index?: number;
}

export default function CasinoCard({ casino, rank, index = 0 }: CasinoCardProps) {
  const isTopRanked = rank && rank <= 3;
  const t = useTranslations("common");
  const tCard = useTranslations("casinoCard");
  
  // 根据排名选择背景渐变
  const getCardBackground = () => {
    if (rank === 1) {
      return "bg-gradient-to-br from-casino-purple-950 via-casino-purple-800 to-casino-purple-900";
    } else if (rank === 2) {
      return "bg-gradient-to-br from-casino-blue-600 to-casino-blue-500";
    } else if (rank === 3) {
      return "bg-gradient-to-br from-casino-pink-600 to-casino-pink-500";
    }
    return "bg-white";
  };

  const textColor = isTopRanked ? "text-white" : "text-dark";
  const bonusAmount = casino.bonuses?.[0]?.amount || "Welcome Bonus";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative ${getCardBackground()} rounded-2xl overflow-hidden card-hover ${
        isTopRanked ? "border border-casino-purple-400/30" : "shadow-lg"
      }`}
    >
      {/* Rank Badge */}
      {rank && rank <= 3 && (
        <div className="absolute top-0 left-0 z-10">
          <RankBadge rank={rank} />
        </div>
      )}

      {/* Top Row: Rank Badge + CTA Button */}
      <div className="flex items-start justify-between p-4 border-b border-white/10">
        {rank && rank <= 3 ? (
          <div className="w-32" /> // Spacer for badge
        ) : (
          <div className="text-casino-purple-600 font-bold text-sm">#{rank || index + 1}</div>
        )}
        <Link
          href={casino.ctaLink}
          className="btn-play-now text-sm py-2 px-6"
          target={casino.ctaLink.startsWith("/go/") || casino.ctaLink.startsWith("http") ? "_blank" : undefined}
          rel={casino.ctaLink.startsWith("/go/") || casino.ctaLink.startsWith("http") ? "sponsored nofollow noopener noreferrer" : undefined}
        >
          {t("playNow")}
        </Link>
      </div>

      {/* Main Content - Horizontal Layout */}
      <div className="p-6 grid md:grid-cols-12 gap-6">
        {/* Left: Logo + Rating */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-white/10 backdrop-blur-md p-4 mb-4 flex items-center justify-center">
            <CasinoLogo
              src={casino.logo}
              alt={`${casino.name} Casino Logo`}
              width={120}
              height={120}
              className="object-contain w-full h-full"
              fallbackText={casino.name.charAt(0)}
              fallbackImage={casino.hero}
            />
          </div>
          <div className={`text-center md:text-left ${textColor}`}>
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <StarRating rating={casino.rating} size="lg" />
              <span className="font-bold text-xl">{casino.rating.toFixed(1)}/5</span>
            </div>
            <h3 className="font-bold text-lg">{casino.name}</h3>
          </div>
        </div>

        {/* Middle: Bonus + Info */}
        <div className="md:col-span-6 space-y-4">
          {/* Bonus Info */}
          <div>
            <div className={`flex items-center gap-2 mb-2 ${textColor}`}>
              <span className="text-2xl">🎁</span>
              <span className="font-semibold text-lg">{bonusAmount}</span>
            </div>
            {casino.bonuses?.[0]?.description && (
              <div className={`text-sm ${isTopRanked ? "text-white/80" : "text-gray-600"} mb-1`}>
                {casino.bonuses[0].description}
              </div>
            )}
            <div className="inline-block px-3 py-1 bg-casino-purple-600/20 text-casino-purple-700 dark:text-casino-purple-300 rounded-full text-xs font-semibold">
              {tCard("bonus")}
            </div>
          </div>

          {/* Availability */}
          <AvailabilityBadge 
            country="Myanmar" 
            className={isTopRanked ? "text-white/80" : ""}
          />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className={`text-xs ${isTopRanked ? "text-white/70" : "text-gray-500"} mb-1`}>
                💰 {tCard("payout")}
              </div>
              <div className={`font-bold ${textColor}`}>
                {casino.features.withdrawalTime || tCard("within1Hour")}
              </div>
            </div>
            <div>
              <div className={`text-xs ${isTopRanked ? "text-white/70" : "text-gray-500"} mb-1`}>
                ⏱️ {tCard("speed")}
              </div>
              <div className={`font-bold ${textColor}`}>
                {casino.features.withdrawalTime || tCard("within1Hour")}
              </div>
            </div>
            <div>
              <div className={`text-xs ${isTopRanked ? "text-white/70" : "text-gray-500"} mb-1`}>
                🎮 {tCard("games")}
              </div>
              <div className={`font-bold ${textColor}`}>
                {casino.features.games}+
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actions (Mobile only or hidden on desktop) */}
        <div className="md:col-span-3 md:hidden flex flex-col gap-3">
          <Link
            href={`/review/${casino.slug}`}
            className={`text-center px-4 py-2 rounded-lg font-semibold transition-colors ${
              isTopRanked
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                : "bg-casino-purple-100 hover:bg-casino-purple-200 text-casino-purple-800"
            }`}
          >
            {tCard("moreDetails")}
          </Link>
        </div>
      </div>

      {/* Bottom: More Details Link */}
      <div className="px-6 pb-4 text-center border-t border-white/10 pt-4">
        <Link
          href={`/review/${casino.slug}`}
          className={`text-sm font-semibold hover:underline ${
            isTopRanked ? "text-white/80 hover:text-white" : "text-casino-purple-600 hover:text-casino-purple-700"
          }`}
        >
          {tCard("moreDetails")}
        </Link>
      </div>
    </motion.div>
  );
}
