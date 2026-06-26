import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";

const copy = {
  my: {
    title: "ငါး ပစ် ဂိမ်း APK Myanmar လမ်းညွှန်",
    description: "ငါး ပစ် ဂိမ်း APK Myanmar လမ်းညွှန်: app download safety, login, room level, payment proof, and safer browser alternatives.",
    h1: "ငါး ပစ် ဂိမ်း APK Myanmar လမ်းညွှန်",
    intro: "Ahrefs မှာ ငါးပစ်ဂိမ်း parent topic က ငါး ပစ် ဂိမ်း apk ဖြစ်ပြီး Google SERP မှာ Google Play / APK listing များစွာပါဝင်နေသည်။ ဒီစာမျက်နှာက APK file ကို host မလုပ်ဘဲ source စစ်နည်း၊ permission စစ်နည်း၊ payment proof သိမ်းနည်းကို ရှင်းပြထားသည်။",
    cta: "Fishing route ကိုစစ်မည်"
  },
  en: {
    title: "Fish Shooting Game APK Myanmar Guide",
    description: "Fish shooting game APK Myanmar guide covering app download safety, login checks, room levels, payment proof, and safer browser alternatives.",
    h1: "Fish Shooting Game APK Myanmar Guide",
    intro: "Ahrefs shows the parent topic around fish shooting APK intent, and Google results are heavily app/listing based. This page explains how to verify a source without hosting unsafe APK files.",
    cta: "Check fishing route"
  }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale === "en" ? "en" : "my"];
  const canonical = getCanonicalUrl('/games/fishing-apk', locale);
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical, languages: getAlternateLanguages('/games/fishing-apk') },
    openGraph: { title: c.title, description: c.description, url: canonical, locale: locale === "en" ? "en_US" : "my_MM" },
  };
}

export default async function FishingApkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = copy[locale === "en" ? "en" : "my"];
  const canonical = getCanonicalUrl('/games/fishing-apk', locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: c.title,
    description: c.description,
    inLanguage: locale === "en" ? "en-US" : "my-MM",
    dateModified: "2026-06-26"
  };

  return (
    <main className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">Games</Link>
          <span>/</span>
          <Link href="/games/fishing" className="hover:text-gold">Fishing</Link>
        </nav>

        <p className="text-gold font-bold uppercase text-sm mb-3">APK safety cluster</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5"><span className="gradient-gold">{c.h1}</span></h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">{c.intro}</p>
        <CTAButton href="/go/y" size="lg">{c.cta}</CTAButton>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-10">
          <h2 className="text-2xl font-bold text-white mb-4">APK မတင်ခင် စစ်ရန်</h2>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>Google Play သို့မဟုတ် verified operator route မဟုတ်သော APK mirror ကိုမယုံပါနှင့်။</li>
            <li>SMS, contacts, overlay permission မလိုအပ်ဘဲ တောင်းလျှင် install မလုပ်ပါနှင့်။</li>
            <li>OTP, wallet password, recovery code ကို support သို့မပို့ပါနှင့်။</li>
            <li>ပထမဆုံး deposit ကိုအနည်းဆုံးပမာဏနဲ့စမ်းပြီး TxID သိမ်းပါ။</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Fishing game room checklist</h2>
          <p className="text-gray-300 leading-relaxed mb-4">ငါးပစ်ဂိမ်းသည် slot spin ထက် room level, bullet cost, target hit rate, boss fish rule တို့ကိုပိုစစ်ရသည်။ APK ထဲဝင်ပြီးတာနဲ့ high room မရွေးခင် small room မှာ bullet cost ကိုစမ်းပါ။</p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Budget</h3><p>Session stop point သတ်မှတ်ပြီး auto fire ကိုကြာရှည်မထားပါနှင့်။</p></div>
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Payment</h3><p>Deposit/withdrawal proof ကို screenshot သိမ်းပြီး support record ထားပါ။</p></div>
          </div>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Why this page exists separately from the main fishing guide</h2>
          <p className="text-gray-300 leading-relaxed mb-4">The main fishing page explains 777 fish shooting intent and game selection. This APK page handles a different search behavior: users looking for app download, Android install, file source, and mobile safety. Keeping the two pages separate helps Google match each URL to one clear intent.</p>
          <p className="text-gray-300 leading-relaxed">It also reduces the risk of overloading the main page with every APK question. The cluster should work as a hub: the main fishing page covers game choice, this page covers APK safety, and the payment page covers deposit or withdrawal issues.</p>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">APK source scoring</h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Good</h3><p>Verified operator page, clear app name, normal permissions, visible support route.</p></div>
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Caution</h3><p>Third-party listing, old version, unclear update notes, different package name.</p></div>
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Avoid</h3><p>Chat-file APK, short link, request for OTP, bank password, contact access, or overlay permission.</p></div>
          </div>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting after APK install</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>If the app opens but login fails, do not immediately download a second APK from a chat group. First clear cache, test browser login, check phone-number format, and confirm whether the operator is in maintenance. Many Myanmar users lose accounts because they install a second file while trying to solve a simple login problem.</p>
            <p>If deposit credit does not arrive after a fishing app login, keep the TxID, amount, wallet name, account ID, and exact time. Support can solve a payment case faster when the proof is clean. Support cannot safely solve the case if the user sends OTP or wallet password.</p>
          </div>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">How YZ09 should monitor this APK page</h2>
          <p className="text-gray-300 leading-relaxed mb-4">This URL should be measured against APK and download queries, while the main fishing guide should be measured against fish shooting game and 777 fish game queries. If both pages start ranking for the same primary term, the page titles should be separated before adding more content.</p>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>Use Search Console impressions to decide whether to add Android, iOS, login, or payment subsections.</li>
            <li>Keep APK safety language visible above the fold because Google results already show app/listing intent.</li>
            <li>Do not add APK file downloads; the ranking angle is safer guidance and verification.</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Decision workflow for fishing APK users</h2>
          <p className="text-gray-300 leading-relaxed mb-4">A fish shooting APK user usually wants fast mobile access, but the safe path is slower: check the source, check permissions, test login, try a small room, then decide whether to deposit. This page exists because APK intent is different from normal fishing-game intent.</p>
          <p className="text-gray-300 leading-relaxed mb-4">If the searcher wants game selection, room level, or bullet strategy, the main fishing guide is the better page. If the searcher wants Android install safety, package source, app permissions, or blocked-app troubleshooting, this APK page should answer it. Keeping those jobs separate reduces cannibalization and makes future GSC updates easier.</p>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>Use this page for APK, download, install, permission, and Android-access terms.</li>
            <li>Use the main fishing page for 777 fish game, room, provider, and gameplay terms.</li>
            <li>Use the payment page for KBZPay, Wave Money, deposit, withdrawal, and TxID problems.</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Related pages</h2>
          <ul className="text-gray-300 leading-relaxed space-y-3">
            <li><Link href="/games/fishing" className="text-gold hover:underline">777 ငါးမုဆိုးဂိမ်း main guide</Link></li>
            <li><Link href="/payment" className="text-gold hover:underline">Myanmar payment guide</Link></li>
            <li><Link href="/games/slots" className="text-gold hover:underline">Slots vs fishing game comparison</Link></li>
          </ul>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </main>
  );
}
