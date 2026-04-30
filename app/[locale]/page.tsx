import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import FeaturedGames from "@/components/sections/FeaturedGames";
import LatestBonuses from "@/components/sections/LatestBonuses";
import InternalLinksSection from "@/components/sections/InternalLinksSection";
import FAQ from "@/components/sections/FAQ";
import { getBaseUrl, getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getCanonicalUrl('', locale),
      languages: getAlternateLanguages(''),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getCanonicalUrl('', locale),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "မြန်မာတွင် အွန်လိုင်း ကာစီနို ကစားခြင်း တရားဝင်ပါသလား?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "မြန်မာနိုင်ငံတွင် အွန်လိုင်း ကာစီနို၏ တရားဝင်မှုသည် ရှုပ်ထွေးနေသေးသည်။ သို့သော် အများအားဖြင့် နိုင်ငံတကာ လိုင်စင်ရ ကာစီနိုများတွင် ကစားခြင်းကို တားမြစ်ထားခြင်း မရှိပါ။"
        }
      },
      {
        "@type": "Question",
        "name": "ဘယ် ကာစီနို က မြန်မာအတွက် အကောင်းဆုံးပါလဲ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shwe Casino, 888 Casino နှင့် 777 Casino တို့သည် မြန်မာ ကစားသမားများအတွက် အကောင်းဆုံး ရွေးချယ်မှုများ ဖြစ်သည်။"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <FeaturedCasinos />
      <FeaturedGames />
      <LatestBonuses />
      <InternalLinksSection />
      <FAQ />
            
      {/* SEO 推薦外部平台 */}
      <section className="py-12 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-4 text-gray-200">
            <h2 className="text-3xl font-bold text-white mb-2">緬甸熱門線上娛樂城推薦</h2>
            <p className="leading-relaxed">
              為了讓玩家獲得更優質的體驗，我們精選了多個在緬甸口碑良好的線上平台，提供豐富的真人娛樂、熱門 slot、
              以及在地化的支付支援。以下連結均為官方入口，建議收藏。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://www.shwecasino99.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">Shwe Casino 99</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  緬甸玩家常用的本地化平台，主打真人賭場與熱門 Pragmatic Play/PG SOFT 夥伴遊戲，並提供
                  KBZ Pay、Wave Money 等支付方式，適合行動端快速遊玩。
                </p>
              </a>
              <a
                href="https://www.pv991.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">PV99</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  聚合 Yes8、Ygn9、Pya777、Mmk99 等多家品牌，提供 slot、捕魚、體育與真人娛樂，並支援
                  手機版 APP 下載，界面輕量、註冊流程簡單，適合新手與老玩家。
                </p>
              </a>
              <a
                href="https://www.myanbetapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">MyanBet App</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  專為緬甸玩家設計的行動應用平台，提供便捷的 APP 下載服務，整合多種熱門遊戲與真人娛樂，
                  支援本地化支付方式，操作流暢、體驗優質。
                </p>
              </a>
              <a
                href="https://www.myanbets.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">MyanBets</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  緬甸知名線上娛樂平台，提供豐富的體育投注、真人賭場與 slot 遊戲選擇，介面友善、
                  註冊快速，適合各類型玩家使用。
                </p>
              </a>
              <a
                href="https://www.myancasino.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">MyanCasino</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  專業的緬甸線上賭場平台，集結多款熱門真人娛樂遊戲，提供優質的遊戲體驗與完善的客戶服務，
                  深受當地玩家信賴。
                </p>
              </a>
              <a
                href="https://www.myanslots.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">MyanSlots</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  專注於 slot 遊戲的娛樂平台，提供數百款熱門老虎機遊戲，包含 Pragmatic Play、PG SOFT
                  等知名供應商，遊戲種類豐富、獎金豐厚。
                </p>
              </a>
              <a
                href="https://www.myanslotsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">MyanSlots App</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  MyanSlots 的行動應用版本，提供便捷的手機 APP 下載，讓玩家隨時隨地享受 slot 遊戲樂趣，
                  介面優化、載入快速，適合行動玩家使用。
                </p>
              </a>
              <a
                href="https://www.nepplay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">NepPlay</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  多元化的線上娛樂平台，提供 slot、真人娛樂、體育投注等多種遊戲選項，平台穩定、
                  支付安全，為緬甸玩家提供全方位的娛樂體驗。
                </p>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              建議透過官方入口連結註冊，以確保活動與安全性，並記得理性娛樂。
            </p>
          </div>
        </div>
      </section>
        
    </div>
  );
}

