const puppeteer = require("puppeteer");
const { expect } = require("chai");
const _ = require("lodash");
const globalVariables = _.pick(global, ["browser", "expect"]);
require("dotenv/config");

const isHeadless = process.env.IS_HEADLESS === "true" ? true : false;

const options = {
  headless: isHeadless,
  defaultViewport: null,
  args: [
    "--start-maximized",
    "--ignore-certificate-errors",
    "--disable-features=site-per-process"
  ]
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(options);

  page = await browser.newPage();

  if (isHeadless) await page.setViewport({ width: 1920, height: 1080 });

  await page.goto(process.env.PERSONAL_URL, {
    waitUntil: "load",
    timeout: 0
  });
});

beforeEach(async () => {});

afterEach(async () => {});

after(async () => {
  await page.close();
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
