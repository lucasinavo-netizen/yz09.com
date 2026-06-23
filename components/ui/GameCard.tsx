"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import CTAButton from "./CTAButton";

interface GameCardProps {
  game: {
    id: string;
    name: string;
    nameMm: string;
    provider: string;
    category: string;
    image?: string;
    hot?: boolean;
    description: string;
  };
  ctaLink: string;
}

export default function GameCard({ game, ctaLink }: GameCardProps) {
  const t = useTranslations("gameCard");

  return (
    <div className="group relative bg-background-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Hot Badge */}
      {game.hot && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
          <span>🔥</span>
          <span className="hidden sm:inline">{t("hotGame")}</span>
        </div>
      )}

      {/* Game Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-casino-purple-900 to-casino-purple-700">
        {game.image && game.image.trim() !== '' ? (
          <Image
            src={game.image}
            alt={`${game.name} - ${game.provider}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/50 text-sm font-semibold">{game.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Game Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-dark mb-1 line-clamp-1 group-hover:text-casino-purple-600 transition-colors">
            {game.name}
          </h3>
          <p className="text-sm text-gray-500">{game.provider}</p>
        </div>

        {/* CTA Button */}
        <Link
          href={ctaLink}
          className="block w-full"
          target={ctaLink.startsWith("/go/") || ctaLink.startsWith("http") ? "_blank" : undefined}
          rel={ctaLink.startsWith("/go/") || ctaLink.startsWith("http") ? "sponsored nofollow noopener noreferrer" : undefined}
        >
          <button className="w-full bg-casino-green-500 hover:bg-casino-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-casino-green-500/50 hover:-translate-y-0.5">
            {t("playNow")}
          </button>
        </Link>
      </div>
    </div>
  );
}
