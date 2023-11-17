const puppeteer = require('puppeteer');

console.log(123)
(async () => {
  // Launch the browser and open a new blank page
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.baidu.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});


  // await browser.close();
})();