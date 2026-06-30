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
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["my", "en"]
    }
  };

  return (
    <html lang='my-MM'>
      <head>
        <meta name="msvalidate.01" content="F31A3989097533BDEBEE5C6AB2C37732" />
        <meta name="google-site-verification" content="ucFKBTzmfGzh3w57ZfVgmqWH2zkU1DU2UW0oePVSuZM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
        id="affiliate-click-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              if (window.__affiliateClickTrackingInstalled) return;
              window.__affiliateClickTrackingInstalled = true;
              function textOf(link) {
                return (link.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 120);
              }
              function placementOf(link) {
                if (link.closest('header, nav')) return 'nav';
                if (link.closest('footer')) return 'footer';
                if (link.closest('article')) return 'article_cta';
                var marker = [
                  link.getAttribute('class'),
                  link.closest('[class]') && link.closest('[class]').getAttribute('class')
                ].filter(Boolean).join(' ').toLowerCase();
                if (marker.indexOf('hero') !== -1) return 'hero';
                if (marker.indexOf('card') !== -1 || marker.indexOf('grid') !== -1) return 'card';
                if (marker.indexOf('cta') !== -1 || marker.indexOf('button') !== -1) return 'cta';
                return 'content';
              }
              document.addEventListener('click', function (event) {
                var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
                if (!link) return;
                var rawHref = link.getAttribute('href') || '';
                var url;
                try { url = new URL(rawHref, window.location.href); } catch (error) { return; }
                if (url.pathname.indexOf('/go/') !== 0) return;
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'affiliate_click', {
                    event_category: 'affiliate',
                    event_label: url.pathname,
                    go_path: url.pathname,
                    link_url: url.href,
                    link_text: textOf(link),
                    page_location: window.location.href,
                    page_path: window.location.pathname,
                    site: window.location.hostname.replace(/^www\\./, ''),
                    placement: placementOf(link),
                    transport_type: 'beacon'
                  });
                }
              }, true);
            })();
          `,
        }}
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
