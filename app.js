const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://events.pokemon.com/en-us/events');


  await page.waitForSelector('#onetrust-accept-btn-handler');
  await page.click('#onetrust-accept-btn-handler');

  await new Promise(r => setTimeout(r, 1000))

/*  const content = await page.content();
  console.log(content);*/

  const input = await page.waitForSelector('input[data-testid="location-search"]');
  await input.type('Santiago, Chile');
  await page.keyboard.press('Enter');

  await new Promise(r => setTimeout(r, 1000))

  await page.setViewport({
    width: 1920,
    height: 1080
  });

  await page.screenshot({ path: 'pokemon-page.png' });

  await browser.close();
})();