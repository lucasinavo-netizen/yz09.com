"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import GameCard from "../ui/GameCard";
import gamesData from "@/data/games.json";

const brandLinks = [
  "/go/y",
  "/go/y",
  "/go/y",
  "/go/y",
];

const gameCategories = [
  { key: "slotGame", image: "/images/games-category/slot-game.webp", href: "/games/slots" },
  { key: "fishingGame", image: "/images/games-category/fishing-game.webp", href: "/games/fishing" },
  { key: "sportsBetting", image: "/images/games-category/sports-betting.webp", href: "/games" },
  { key: "liveCasino", image: "/images/games-category/live-casino.webp", href: "/games/live-casino" },
  { key: "keno", image: "/images/games-category/keno.webp", href: "/games" },
];

export default function FeaturedGames() {
  const t = useTranslations("featuredGames");
  
  const gamesToShow = 6;
  const initialGames = gamesData.slice(0, gamesToShow).map((game, index) => ({
    ...game,
    image: game.thumbnail,
    ctaLink: brandLinks[index % brandLinks.length],
  }));
  
  const [gamesWithLinks, setGamesWithLinks] = useState<Array<typeof gamesData[0] & { ctaLink: string }>>(initialGames);
  
  useEffect(() => {
    const games = [...gamesData];
    
    for (let i = games.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [games[i], games[j]] = [games[j], games[i]];
    }
    
    const displayGames = [];
    for (let i = 0; i < gamesToShow; i++) {
      displayGames.push(games[i % games.length]);
    }

    const gamesWithLinksData = displayGames.map((game, index) => ({
      ...game,
      image: game.thumbnail,
      ctaLink: brandLinks[index % brandLinks.length],
    }));
    
    setGamesWithLinks(gamesWithLinksData);
  }, []);

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        {/* Game Category Cards - BK959 Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {gameCategories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              className="group relative rounded-xl overflow-hidden bg-dark-lighter border border-dark-lightest hover:border-gold/40 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={t(`categories.${cat.key}.title`)}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {t(`categories.${cat.key}.title`)}
                  </h3>
                </div>
              </div>
              <div className="p-4 pt-2">
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {t(`categories.${cat.key}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Existing Game Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {gamesWithLinks.map((game, index) => (
            <GameCard key={`${game.id}-${index}`} game={game} ctaLink={game.ctaLink} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/games"
            className="inline-block px-8 py-4 bg-gradient-to-r from-casino-purple-500 to-casino-purple-600 hover:from-casino-purple-600 hover:to-casino-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t("viewAllGames")}
          </Link>
        </div>
      </div>
    </section>
  );
}
