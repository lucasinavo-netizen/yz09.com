import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    google: "NXckRye6Vpw_8pZKm7oO3C7lqrSTr413-taVEYy-4Jk",
    other: {
      "msvalidate.01": "F31A3989097533BDEBEE5C6AB2C37732",
    },
  },

  openGraph: { images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'yz09.com' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
