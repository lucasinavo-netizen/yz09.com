export function GET() {
  return new Response(
    `<?xml version="1.0"?>\n<users>\n  <user>F31A3989097533BDEBEE5C6AB2C37732</user>\n</users>\n`,
    {
      headers: {
        "content-type": "application/xml; charset=utf-8",
      },
    },
  );
}
