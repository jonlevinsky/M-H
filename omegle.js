const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.omegle.com/');
  await page.waitForSelector('textbtn');
  await page.waitForSelector('textarea');

  // Nastavte text, který chcete odeslat na Omegle
  const message = 'Ahoj, jak se máš?';

  // Odeslat zprávu
  await page.type('textarea', message);
  await page.keyboard.press('Enter');

  // Zavřít prohlížeč
  await browser.close();
})();
