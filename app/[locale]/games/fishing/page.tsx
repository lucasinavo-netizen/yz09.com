import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const brandLink = "/go/y";

const pageCopy = {
  my: {
    eyebrow: "Myanmar fishing casino guide",
    intro:
      "777 ငါးမုဆိုးဂိမ်း၊ ငါးပစ်ဂိမ်း app download၊ ငါး ပစ် ဂိမ်း apk ကိုရှာနေသူအများစုက ဂိမ်းနာမည်တစ်ခုတည်းမဟုတ်ဘဲ ဝင်ရမည့် link၊ ဖုန်းမှာကစားလို့ရ/မရ၊ ငွေသွင်းငွေထုတ် လုံခြုံ/မလုံခြုံ ဆိုတာကို အမြန်သိချင်ကြသည်။ ဒီစာမျက်နှာမှာ 777 fishing game အမျိုးအစားကို ဘယ်လိုစစ်၊ ဘယ်လိုရွေး၊ ဘယ်လိုကစားသင့်လဲဆိုတာကို မြန်မာကစားသမားအတွက် စုစည်းထားသည်။",
    proofTitle: "777 ငါးမုဆိုးဂိမ်း ရှာတဲ့အခါ အရေးကြီးဆုံးက link မဟုတ်ဘဲ စစ်ဆေးနည်း",
    proofBody:
      "Search result တွေမှာ 777, fishing, ငါးမုဆိုး, ငါးပစ်ဂိမ်း ဆိုတဲ့စကားလုံးတွေ ရောထွေးနေတတ်သည်။ အကောင့်မဖွင့်ခင် အရင်စစ်ရမည့်အချက်တွေက platform name, login flow, payment method, game provider, customer support response ဖြစ်သည်။",
    checks: [
      {
        title: "တရားဝင်ဝင်ပေါက်ကိုစစ်ပါ",
        body: "Facebook post တစ်ခုတည်း၊ Telegram link တစ်ခုတည်းကို မယုံပါနှင့်။ Domain, HTTPS, login page, support contact တူညီမှုကို စစ်ပါ။",
      },
      {
        title: "APK မတင်ခင် လုံခြုံမှုစစ်ပါ",
        body: "ငါး ပစ် ဂိမ်း apk သို့မဟုတ် app download လိုအပ်ပါက app permission, file size, update source, uninstall option ကိုကြည့်ပါ။ SMS/contact permission တောင်းလွန်းရင် သတိထားပါ။",
      },
      {
        title: "ငွေသွင်းငွေထုတ်ကို အရင်စမ်းပါ",
        body: "ပမာဏကြီးမသွင်းခင် KBZ Pay, Wave Money, AYA Pay, CB Pay စသည်ဖြင့် အနည်းဆုံးပမာဏနဲ့ deposit/withdrawal flow ကိုစစ်ပါ။",
      },
      {
        title: "ဂိမ်းအမျိုးအစားကို နားလည်ပါ",
        body: "ငါးမုဆိုးဂိမ်းသည် slot နဲ့မတူပါ။ Target, bullet cost, room level, boss fish, auto aim စနစ်တွေကြောင့် budget ထိန်းချုပ်မှု ပိုလိုအပ်သည်။",
      },
    ],
    stepsTitle: "ငါးမုဆိုးဂိမ်း ကစားနည်း အခြေခံ",
    steps: [
      "အကောင့်ဝင်ပြီး fishing သို့မဟုတ် ငါးဖမ်းဂိမ်း category ကိုရှာပါ။",
      "Room level ကိုအရင်နိမ့်နိမ့်ရွေးပြီး bullet cost ကိုစစ်ပါ။",
      "Boss fish သာမက small fish hit rate ကိုပါကြည့်ပါ။",
      "Auto fire ကိုအမြဲဖွင့်ထားခြင်းထက် budget stop point သတ်မှတ်ပါ။",
      "Session တစ်ခုချင်းစီပြီးတိုင်း balance history ကိုစစ်ပါ။",
    ],
    tableTitle: "777 fishing game မကစားခင် စစ်ရန်",
    table: [
      ["စစ်ရန်", "ဘာကြည့်မလဲ", "မစစ်လျှင် ဖြစ်နိုင်သောပြဿနာ"],
      ["Login", "OTP, password reset, support response", "အကောင့်ပြန်မရနိုင်ခြင်း"],
      ["Payment", "KBZ Pay / Wave Money / bank flow", "ငွေဝင်ငွေထွက် နှောင့်နှေးခြင်း"],
      ["Game room", "bullet cost, room level, boss rules", "Budget မြန်မြန်ကုန်ခြင်း"],
      ["APK", "source, permission, update path", "ဖုန်းလုံခြုံရေးပြဿနာ"],
      ["Promotion", "turnover, withdrawal cap, expiry", "ဘောနပ်စ်ရပြီး ထုတ်မရခြင်း"],
    ],
    troubleTitle: "အဖြစ်များသော ပြဿနာများ",
    trouble: [
      {
        title: "777 ငါးမုဆိုးဂိမ်း ဝင်မရဘူး",
        body: "Browser cache ဖျက်ပြီး HTTPS domain ကိုပြန်စစ်ပါ။ App သုံးနေလျှင် APK version ဟောင်းနေလား စစ်ပါ။ Login OTP မလာပါက support channel မှတ်တမ်းထားပြီး ဆက်သွယ်ပါ။",
      },
      {
        title: "ငါးမထိဘဲ balance မြန်မြန်ကုန်တယ်",
        body: "Room level မြင့်လွန်းခြင်း၊ bullet cost ကြီးခြင်း၊ auto fire ကြာရှည်ဖွင့်ထားခြင်း ဖြစ်နိုင်သည်။ Lower room မှာ hit pattern စမ်းပြီးမှ budget တိုးပါ။",
      },
      {
        title: "ငွေထုတ်တာနှေးတယ်",
        body: "Promotion turnover မပြီးသေးခြင်း၊ account name မတူခြင်း၊ payment queue ကြာခြင်း ဖြစ်နိုင်သည်။ Deposit slip, game history, withdrawal request time ကို screenshot သိမ်းထားပါ။",
      },
    ],
    relatedTitle: "နောက်ထပ်အသုံးဝင်သော စာမျက်နှာများ",
    related: [
      { href: "/games/slots", label: "စလော့ဂိမ်းများနှင့် fishing game ကွာခြားချက်" },
      { href: "/games/fishing-apk", label: "ငါး ပစ် ဂိမ်း APK safety guide" },
      { href: "/payment", label: "KBZ Pay / Wave Money ငွေလွှဲနည်းများ" },
      { href: "/guide/how-to-play", label: "အကောင့်ဖွင့်ပြီး စတင်ကစားနည်း" },
    ],
    faqTitle: "777 ငါးမုဆိုးဂိမ်း FAQ",
    faqs: [
      {
        q: "777 ငါးမုဆိုးဂိမ်းက slot game လား?",
        a: "မတူပါ။ Slot သည် spin mechanic အခြေခံပြီး fishing game သည် bullet/target/room mechanic အခြေခံသည်။ ဒါကြောင့် budget ထိန်းချုပ်နည်းလည်း မတူပါ။",
      },
      {
        q: "ဖုန်းနဲ့ကစားလို့ရလား?",
        a: "အများစုမှာ mobile browser သို့မဟုတ် Android APK ဖြင့်ကစားနိုင်သည်။ APK တင်မည်ဆိုလျှင် source နှင့် permission ကိုအရင်စစ်သင့်သည်။",
      },
      {
        q: "အကောင်းဆုံး fishing game ကိုဘယ်လိုရွေးမလဲ?",
        a: "နာမည်ကြီးတာတစ်ခုတည်းနဲ့မရွေးပါနှင့်။ Login အလုပ်လုပ်မှု၊ ငွေထုတ်မြန်မှု၊ room level, support response, promotion rules ကိုအတူတူစစ်သင့်သည်။",
      },
    ],
    ctaTitle: "777 fishing game ကိုမစတင်ခင် checklist နဲ့စစ်ပါ",
    ctaBody:
      "အကောင့်ဖွင့်ပြီးတာနဲ့ ပမာဏကြီးမသွင်းပါနှင့်။ Deposit, withdrawal, support, APK permission ကိုအရင်စမ်းပြီးမှ budget တိုးပါ။",
    schemaName: "777 ငါးမုဆိုးဂိမ်း လမ်းညွှန်",
  },
  en: {
    eyebrow: "Myanmar fishing casino guide",
    intro:
      "People searching for 777 fishing games, fish shooting app downloads, or fishing game APKs usually need more than a game name. They need the right entry path, mobile compatibility, safe payments, and a simple way to avoid fake links. This guide explains how Myanmar players should evaluate 777-style fishing games before depositing.",
    proofTitle: "For 777 fishing game searches, verification matters more than the first link",
    proofBody:
      "Search results often mix 777, fishing, fish shooting, and casino terms. Before opening an account, check the platform name, login flow, payment methods, game provider, and support response.",
    checks: [
      {
        title: "Check the real entry path",
        body: "Do not rely on one social post or one chat link. Match the domain, HTTPS page, login screen, and support contact before registering.",
      },
      {
        title: "Review APK safety first",
        body: "If a fish shooting APK or app download is required, check permissions, file source, update path, and uninstall options. Be careful with apps asking for excessive phone permissions.",
      },
      {
        title: "Test payments with a small amount",
        body: "Before larger deposits, test the deposit and withdrawal flow with a small amount through KBZ Pay, Wave Money, AYA Pay, or CB Pay.",
      },
      {
        title: "Understand the game type",
        body: "Fishing games are not slots. Target choice, bullet cost, room level, boss fish, and auto aim all affect how quickly balance changes.",
      },
    ],
    stepsTitle: "Basic fishing game play flow",
    steps: [
      "Log in and open the fishing game category.",
      "Start from a lower room and check bullet cost first.",
      "Watch both boss fish and small fish hit patterns.",
      "Set a stop point instead of leaving auto fire on for too long.",
      "Review balance history after each session.",
    ],
    tableTitle: "What to check before playing 777 fishing games",
    table: [
      ["Check", "What to review", "Risk if ignored"],
      ["Login", "OTP, password reset, support response", "Account recovery issues"],
      ["Payment", "KBZ Pay / Wave Money / bank flow", "Delayed deposits or withdrawals"],
      ["Game room", "Bullet cost, room level, boss rules", "Budget drains too quickly"],
      ["APK", "Source, permissions, update path", "Phone security risk"],
      ["Promotion", "Turnover, withdrawal cap, expiry", "Bonus cannot be withdrawn"],
    ],
    troubleTitle: "Common problems",
    trouble: [
      {
        title: "The 777 fishing game will not open",
        body: "Clear browser cache and verify the HTTPS domain. If using an app, check whether the APK version is old. If OTP does not arrive, keep records and contact support.",
      },
      {
        title: "Balance drops too quickly",
        body: "The room level may be too high, bullet cost may be too expensive, or auto fire may be running too long. Test lower rooms before increasing budget.",
      },
      {
        title: "Withdrawals are slow",
        body: "Possible causes include unfinished turnover, mismatched account names, or payment queue delays. Keep screenshots of deposit slips, game history, and withdrawal time.",
      },
    ],
    relatedTitle: "Useful next pages",
    related: [
      { href: "/games/slots", label: "Slots vs fishing games" },
      { href: "/payment", label: "KBZ Pay and Wave Money payment guide" },
      { href: "/guide/how-to-play", label: "How to open an account and start safely" },
    ],
    faqTitle: "777 fishing game FAQ",
    faqs: [
      {
        q: "Is a 777 fishing game the same as a slot game?",
        a: "No. Slots are based on spin mechanics, while fishing games use bullet, target, and room mechanics. Budget control is different.",
      },
      {
        q: "Can I play on mobile?",
        a: "Most platforms support mobile browser play or Android APK. If installing an APK, verify the source and requested permissions first.",
      },
      {
        q: "How should I choose a fishing game?",
        a: "Do not choose by name alone. Review login reliability, withdrawal speed, room levels, support response, and promotion rules together.",
      },
    ],
    ctaTitle: "Check the list before starting a 777 fishing game",
    ctaBody:
      "After opening an account, avoid large first deposits. Test deposit, withdrawal, support, and APK permissions before increasing budget.",
    schemaName: "777 Fishing Game Myanmar Guide",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const canonical = getCanonicalUrl('/games/fishing', locale);

  return {
    title: t("fishingTitle"),
    description: t("fishingDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/games/fishing'),
    },
    openGraph: {
      title: t("fishingTitle"),
      description: t("fishingDescription"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: canonical,
    },
  };
}

export default async function FishingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const fishingGames = gamesData.filter((game: any) => game.category === 'fishing');
  const copy = pageCopy[locale === "en" ? "en" : "my"];
  const canonical = getCanonicalUrl('/games/fishing', locale);
  const siteUrl = getCanonicalUrl('/', locale);
  const language = locale === "en" ? "en-US" : "my-MM";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: copy.schemaName,
      description: t("fishingDescription"),
      inLanguage: language,
      isPartOf: {
        "@type": "WebSite",
        name: "YZ09",
        url: siteUrl,
      },
      about: [
        { "@type": "Thing", name: "777 fishing game" },
        { "@type": "Thing", name: "Myanmar fishing casino games" },
        { "@type": "Thing", name: "ငါးမုဆိုးဂိမ်း" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: tCommon("home"),
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tCommon("games"),
          item: getCanonicalUrl('/games', locale),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: copy.schemaName,
          item: canonical,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">{tCommon("games")}</Link>
          <span>/</span>
          <span className="text-white">{t("fishing")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">{t("fishingHeading")}</span>
        </h1>

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 mb-10">
          <section className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
            <p className="text-gold text-sm font-semibold uppercase tracking-wide mb-3">{copy.eyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{copy.proofTitle}</h2>
            <p className="text-gray-300 leading-8 mb-4">{copy.intro}</p>
            <p className="text-gray-300 leading-8">{copy.proofBody}</p>
          </section>

          <aside className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-6 border border-gold/30">
            <h2 className="text-xl font-bold text-white mb-3">{copy.ctaTitle}</h2>
            <p className="text-gray-300 leading-7 mb-5">{copy.ctaBody}</p>
            <CTAButton href={brandLink} variant="gold" size="md" className="w-full">
              {tCommon("openAccount")}
            </CTAButton>
          </aside>
        </div>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          {copy.checks.map((item) => (
            <div key={item.title} className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
              <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-gray-300 leading-7">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 mb-12">
          <div className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
            <h2 className="text-2xl font-bold text-white mb-5">{copy.stepsTitle}</h2>
            <ol className="space-y-4">
              {copy.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-gray-300 leading-7">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-dark font-bold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest overflow-x-auto">
            <h2 className="text-2xl font-bold text-white mb-5">{copy.tableTitle}</h2>
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-dark-lightest">
                  {copy.table[0].map((header) => (
                    <th key={header} className="py-3 pr-4 text-gold text-sm font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.table.slice(1).map((row) => (
                  <tr key={row[0]} className="border-b border-dark-lightest/70">
                    {row.map((cell, index) => (
                      <td key={cell} className={`py-4 pr-4 text-sm leading-6 ${index === 0 ? "text-white font-semibold" : "text-gray-300"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fishingGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Fishing Game`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold mb-1">{game.nameMm}</h3>
                <p className="text-gray-400 text-sm">{game.provider}</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="grid lg:grid-cols-3 gap-6 mb-12">
          {copy.trouble.map((item) => (
            <div key={item.title} className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
              <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-gray-300 leading-7">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-12">
          <div className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
            <h2 className="text-2xl font-bold text-white mb-5">{copy.relatedTitle}</h2>
            <div className="space-y-3">
              {copy.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg border border-dark-lightest px-4 py-3 text-gray-200 hover:border-gold/60 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
            <h2 className="text-2xl font-bold text-white mb-5">{copy.faqTitle}</h2>
            <div className="space-y-5">
              {copy.faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="text-white font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-300 leading-7">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{copy.ctaTitle}</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-7 mb-6">{copy.ctaBody}</p>
          <CTAButton href={brandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
