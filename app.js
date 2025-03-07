const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://events.pokemon.com/en-us/events');
  await page.screenshot({ path: 'pokemon-page.png' });

  await browser.close();
})();