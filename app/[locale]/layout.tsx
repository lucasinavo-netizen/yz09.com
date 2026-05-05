import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import AgeVerification from "@/components/ui/AgeVerification";
import CookieConsent from "@/components/ui/CookieConsent";
import { getBaseUrl } from "@/lib/config";
import { ReactNode } from 'react';
import Script from 'next/script';

const baseUrl = getBaseUrl();

const localeCodes: Record<string, string> = {
  my: 'my-MM',
  en: 'en-US',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const localeCode = localeCodes[locale] || 'my-MM';
  const lang = locale === 'my' ? 'my' : 'en';

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Myanmar Casino Reviews",
    "url": baseUrl,
    "description": locale === 'my' 
      ? "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ"
      : "Best online casino reviews in Myanmar",
    "inLanguage": localeCode,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Myanmar Casino Reviews",
    "url": baseUrl,
    "description": locale === 'my'
      ? "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ"
      : "Best online casino reviews in Myanmar",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM",
      "addressRegion": "Yangon Region",
      "addressLocality": "Yangon"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["my", "en"],
      "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Myanmar Casino Reviews",
    "image": `${baseUrl}/images/site-logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM",
      "addressRegion": "Yangon Region",
      "addressLocality": "Yangon"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.8661",
      "longitude": "96.1951"
    },
    "url": baseUrl,
    "priceRange": "$$"
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Myanmar Casino Reviews",
    "applicationCategory": "ReviewApplication",
    "operatingSystem": "Web",
    "url": baseUrl,
    "description": locale === 'my'
      ? "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ"
      : "Best online casino reviews in Myanmar",
    "inLanguage": localeCode,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "2847",
      "reviewCount": "2847"
    }
  };

  return (
    <html lang='my-MM'>
      <head>
        <meta name="msvalidate.01" content="F31A3989097533BDEBEE5C6AB2C37732" />
      </head>
      <body>
      {/* <LangSetter locale={locale} /> */}
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HRDGFWT9KP"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HRDGFWT9KP');
          `,
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="software-application-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <NextIntlClientProvider messages={messages}>
        <AgeVerification />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </NextIntlClientProvider>
    </body>
    </html>
  );
}
