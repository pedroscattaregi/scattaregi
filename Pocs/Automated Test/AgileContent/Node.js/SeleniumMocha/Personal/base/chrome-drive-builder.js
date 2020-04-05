const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const config = require('../config/config');

const chromeDriverBuilder = {
  build: () => {
    let options = new chrome
      .Options()
      .windowSize(config.screen);
    if (config.headless) {
      options.headless();
    }
    console.log(`chromedriver.version: ${chromedriver.version}`);
    return new Builder()
      .setChromeOptions(options)
      .forBrowser('chrome')
      .build();
  }
};

module.exports = chromeDriverBuilder;