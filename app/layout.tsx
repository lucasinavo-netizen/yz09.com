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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}


// Wave 1 SEO additions
export const seoWave1 = {
  openGraph: {
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'yz09.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Shwe Casino, 888 Casino, ",
    description: "မြန်မာနိုင်ငံအတွက် နံပါတ် ၁ ကာစီနို သုံးသပ်ချက် ဝဘ်ဆိုဒ် - Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino ကို နှိုင်းယှဉ်ပါ။ မြန်မာ ကစားသမားများအတွက် ကျွမ်းကျင်သူ သုံးသပ်ချက်များ၊ ဘောနပ်စ်များန",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
};
