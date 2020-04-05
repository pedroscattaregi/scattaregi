const {Builder, Capabilities} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const geckodriver = require('geckodriver');
const config = require('../config/config');

const firefoxDriverBuilder = {
  build: () => {
    let options = new firefox
      .Options()
      .windowSize(config.screen);
    if (config.headless) {
      options.headless();
    }
    const capabilities = Capabilities
      .firefox()
      .set('acceptInsecureCerts', true);    
    console.log(`geckodriver.version: ${geckodriver.version}`);
    return new Builder()
      .setFirefoxOptions(options)
      .withCapabilities(capabilities)
      .forBrowser('firefox')
      .build();
  }
};

module.exports = firefoxDriverBuilder;