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
          <h2 className="text-2xl font-bold text-white mb-4">Search intent split for fishing APK terms</h2>
          <p className="text-gray-300 leading-relaxed mb-4">This page should target APK, download, Android, install, and app-source questions. The main fishing guide should target game choice, room levels, 777 fish game intent, and gameplay comparison. Separating those jobs helps Google understand why both URLs should exist.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300 border-collapse">
              <thead><tr className="text-white"><th className="border border-dark-lightest p-3">Query pattern</th><th className="border border-dark-lightest p-3">User problem</th><th className="border border-dark-lightest p-3">Best page</th></tr></thead>
              <tbody>
                <tr><td className="border border-dark-lightest p-3">ငါး ပစ် ဂိမ်း apk</td><td className="border border-dark-lightest p-3">Wants Android install or file source</td><td className="border border-dark-lightest p-3">This APK safety page</td></tr>
                <tr><td className="border border-dark-lightest p-3">777 ငါးမုဆိုးဂိမ်း</td><td className="border border-dark-lightest p-3">Wants fishing game selection or gameplay</td><td className="border border-dark-lightest p-3">Main fishing guide</td></tr>
                <tr><td className="border border-dark-lightest p-3">fish shooting login</td><td className="border border-dark-lightest p-3">Needs account or app access</td><td className="border border-dark-lightest p-3">This page plus login support</td></tr>
                <tr><td className="border border-dark-lightest p-3">casino deposit not showing</td><td className="border border-dark-lightest p-3">Payment proof issue after app use</td><td className="border border-dark-lightest p-3">Payment guide</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Browser route versus APK route</h2>
          <p className="text-gray-300 leading-relaxed mb-4">A browser route is usually the safer first test because it does not require file permissions. If browser login works but the APK fails, the issue is likely app version, cache, device compatibility, or source mismatch. If both fail, collect the exact error text before trying another mirror.</p>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>Use browser access first when the APK source is unclear.</li>
            <li>Do not install a second APK from a comment or chat group just because the first app failed.</li>
            <li>Check whether the app and browser show the same cashier and support details.</li>
            <li>If the app asks for unrelated phone permissions, stop and use the browser route.</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Room-level and bankroll risk</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Fish shooting games can drain balance faster than normal slot spins because bullet cost and room level change the session speed. A useful APK page should warn users not to jump into high rooms immediately after installation.</p>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Small room</h3><p>Best for testing controls, bullet cost, lag, and account stability after login.</p></div>
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">Medium room</h3><p>Use only after payment and login proof are clear. Set a time and loss limit.</p></div>
            <div className="bg-dark rounded-lg p-4 border border-dark-lightest"><h3 className="text-white font-bold mb-2">High room</h3><p>Higher speed and larger swings. Avoid during bonus turnover or app-source uncertainty.</p></div>
          </div>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Payment proof after fishing app play</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Payment proof should be collected before a dispute happens. Fish shooting sessions can move quickly, so users need account ID, route used, room level, wallet proof, and timestamp ready if a deposit or withdrawal is delayed.</p>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>Save TxID, amount, wallet name, account ID, and exact payment time.</li>
            <li>Record app version or browser route if the account later fails to open.</li>
            <li>Do not send OTP, wallet password, or recovery code to prove ownership.</li>
            <li>If support asks about a fishing game result, provide game time and room level rather than private wallet data.</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">App update and mirror safety</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Fishing APK users often move between mirror links when one route slows down. That creates account and payment risk. A safer update path is to verify the route first, compare brand details, and avoid installing a new file during an active payment or withdrawal issue.</p>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>Do not install a forced update from a private message while a deposit is pending.</li>
            <li>Compare app name, logo, support route, and cashier wording before login.</li>
            <li>Keep the previous working route recorded until the new route is verified.</li>
            <li>If the update changes permissions or asks for OTP, stop and use browser access.</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">What this page should not promise</h2>
          <p className="text-gray-300 leading-relaxed mb-4">This page should not promise an official APK download, guaranteed wins, guaranteed boss fish hits, or guaranteed withdrawals. Those claims are not useful and can make the page look like a thin gambling doorway. The stronger SEO angle is practical safety: app source, permission risk, room-level control, and payment proof.</p>
          <p className="text-gray-300 leading-relaxed">If future content needs to discuss a specific fishing provider, jackpot mechanic, or game strategy, that should support the main fishing guide. If future content discusses Android install errors, blocked app routes, permission warnings, or app update issues, it should support this APK page.</p>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Support escalation checklist</h2>
          <p className="text-gray-300 leading-relaxed mb-4">If a fishing APK problem turns into a support case, the user should keep the message short and evidence-based. The most useful details are account ID, route used, app or browser version, device type, network type, game room, payment status, exact error text, and timestamp. Long emotional messages usually slow the case down because support still needs these facts.</p>
          <p className="text-gray-300 leading-relaxed mb-4">The support message should not include OTP, wallet password, banking password, phone unlock code, or recovery code. If support asks for one of those details, the user should stop and verify the route again from the main guide before continuing.</p>
          <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6">
            <li>For login problems, send account ID, route, device, network, and error text.</li>
            <li>For deposit problems, send TxID, amount, wallet name, account ID, and payment time.</li>
            <li>For game-room problems, send room level, game time, app version, and screenshot of the issue.</li>
          </ul>
        </section>

        <section className="bg-dark-lighter border border-dark-lightest rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-white mb-4">How this page supports future daily articles</h2>
          <p className="text-gray-300 leading-relaxed mb-4">This URL should become the parent for fish-shooting APK support articles. A daily article about APK not installing, game app update, Android permission warning, slow app login, or fishing game browser fallback should link here. A daily article about game selection or 777 fish room strategy should link to the main fishing page.</p>
          <p className="text-gray-300 leading-relaxed">That structure prevents YZ09 from publishing many similar pages that all chase the same keyword. Each article gets a clear parent, and Search Console data can later show whether APK, gameplay, or payment intent deserves the next update.</p>
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
