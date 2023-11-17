const puppeteer = require('puppeteer');

(async () => {
  let room = '';
  // 帐号1
  const browser1 = await puppeteer.launch({headless: false});
  const page1 = await browser1.newPage();
  await page1.goto('https://www.baidu.com/');
  await page1.setViewport({width: 1920, height: 1080});

  let login1 = await page1.$("#s-top-loginbtn");
  console.log('login1',login1)
  login1.click();

  setTimeout(async() => {
    //进行登录
    let userName1 = await page1.$("#TANGRAM__PSP_11__userName");
    let password1 = await page1.$("#TANGRAM__PSP_11__password");
    console.log('userName1',userName1)

    await page1.$eval('#TANGRAM__PSP_11__userName', el => el.value = 'testtesttest');
    await page1.$eval('#TANGRAM__PSP_11__password', el => el.value = 'testtesttest');
    // userName1.value='test';
    // password1.val='test';
  }, 1000);




  // 帐号2
  const browser2 = await puppeteer.launch({headless: false});
  const page2 = await browser2.newPage();
  await page2.goto('https://www.baidu.com/');
  await page2.setViewport({width: 1920, height: 1024});

  let login2 = await page2.$("#s-top-loginbtn");
  login2.click();


})();