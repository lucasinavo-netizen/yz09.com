"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: CTAButtonProps) {
  const isAffiliateLink = href.startsWith("/go/") || href.startsWith("http");
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-casino-purple-600 hover:bg-casino-purple-700 text-white shadow-lg shadow-casino-purple/50",
    secondary: "bg-white/10 hover:bg-white/20 text-white border-2 border-casino-purple-400",
    gold: "btn-play-now text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
        target={isAffiliateLink ? "_blank" : undefined}
        rel={isAffiliateLink ? "sponsored nofollow noopener noreferrer" : undefined}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
        {variant === "gold" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        )}
      </Link>
    </motion.div>
  );
}
