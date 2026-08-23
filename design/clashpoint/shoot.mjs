import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1800, height: 440 }, deviceScaleFactor: 1 });
await page.goto('file:///home/user/tennis3point/design/clashpoint/render.html');
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'clashpoint-banner-1800x440.png', clip: { x: 0, y: 0, width: 1800, height: 440 } });
await browser.close();
console.log('shot');
