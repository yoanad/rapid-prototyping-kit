#!/usr/bin/env node
const { chromium } = require('playwright');

async function main() {
  const [, , url, outPath, scaleArg] = process.argv;
  const deviceScaleFactor = Number(scaleArg || '3');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor,
  });
  const page = await context.newPage();
  await page.goto(url);
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
