const puppeteer = require('puppeteer');

(async () => {
  // 设置抖音直播房间号
  var room = '';


  // 帐号1
  const browser1 = await puppeteer.launch({headless: false});
  const page1 = await browser1.newPage();
  await page1.goto('https://www.baidu.com/');
  await page1.setViewport({width: 1920, height: 1080});

  let login1 = await page1.$("#s-top-loginbtn");
  // 点击登录按钮
  login1.click();

  // 点击登录后，等待登录弹窗显示dom加载
  await page1.waitForTimeout(1000);

  //进行登录
  await page1.$("#TANGRAM__PSP_11__userName");
  await page1.$("#TANGRAM__PSP_11__password");

  // 登录表单赋值
  await page1.$eval('#TANGRAM__PSP_11__userName', el => el.value = '15026753453');
  await page1.$eval('#TANGRAM__PSP_11__password', el => el.value = 'kolento2023');

  //判断是否直播中

  //查询当前主播的点赞数


  //开始点赞-速度1秒钟10次
  var timeBox1;
  let total1 = 0;
  // let target1 = await page1.$('Zs4Pv2bD');
  timeBox1 = setInterval(()=>{
    if(total1<=2000){
      total1++;
      //点赞数提醒
      if(total1==100||total1==500||total1==1000||total1==1500||total1==2000){
        console.log('点赞数--3453',total1)
      }
      // target1[0].click();
    }else{
      console.log('3453-点赞结束');
      clearInterval(timeBox1);
    }
  },100)

  //结束点赞-退出窗口
  browser1.close();



  // 帐号2
  // const browser2 = await puppeteer.launch({headless: false});
  // const page2 = await browser2.newPage();
  // await page2.goto('https://www.baidu.com/');
  // await page2.setViewport({width: 1920, height: 1024});

  // let login2 = await page2.$("#s-top-loginbtn");
  // login2.click();


})();