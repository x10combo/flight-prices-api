const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.ryanair.com/gb/en/cheap-flights');
await page.screenshot({ path: 'screenshot.png' });


await browser.close();
})();