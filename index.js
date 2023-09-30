const puppeteer = require("puppeteer");
const getScreen = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/artemisia96/?hl=en", {
    waitUntil: "networkidle0",
  });
  const [button] = await page.$x("//button[contains(., 'Allow all')]");
  if (button) {
    await button.click();
    await page.waitForNetworkIdle({ idleTime: 1000 });
    const dateNow = new Date();
    await page.screenshot({
      path: `screenshot/${Math.floor(Math.random() * 1000000000000)}.png`,
      fullPage: true,
    });
  }
  console.log("u kodu");
  await browser.close();
};

setInterval(() => {
  console.log("Running");
  getScreen();
}, 100000000);
