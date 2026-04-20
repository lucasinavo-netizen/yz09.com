import { NextResponse } from 'next/server';

// Content inlined at build time so it's available in serverless runtime
const CONTENT = `# yz09.com

> ၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino

မြန်မာနိုင်ငံအတွက် နံပါတ် ၁ ကာစီနို သုံးသပ်ချက် ဝဘ်ဆိုဒ် - Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino ကို နှိုင်းယှဉ်ပါ။ မြန်မာ ကစားသမားများအတွက် ကျွမ်းကျင်သူ သုံးသပ်ချက်များ၊ ဘောနပ်စ်များနှင့် အဆင့်သတ်မှတ်ချက်များ။

## Pages

- [၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino](https://yz09.com/): မြန်မာနိုင်ငံအတွက် နံပါတ် ၁ ကာစီနို သုံးသပ်ချက် ဝဘ်ဆိုဒ် - Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino ကို နှိုင်းယှဉ်ပါ။ မြန်မာ ကစားသမားများအတွက် ကျွမ်းကျင်သူ သုံးသပ်ချက်များ၊ ဘောနပ်စ်များနှင့် အဆင့်သတ်မှတ်ချက်များ။

## Topics

This site provides information and comparisons related to online gaming and betting platforms in Myanmar.

## Content Language

- Primary: my-MM

## Crawler Guidelines

- This site's content is original and may be cited with attribution.
- Please respect our robots.txt for crawl budgets.
- For commercial use of our content, contact the site owner.
`;

export async function GET() {
  return new NextResponse(CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
