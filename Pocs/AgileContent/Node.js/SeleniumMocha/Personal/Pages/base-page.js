const {until, WebElementPromise} = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.milisecondsTimeout = 15000;
    this.milisecondsDelay = 500; // ¯\_(ツ)_/¯
  }

  getElement(locator) {
    const _getElement = async (_locator) => {
      let element =  await this.driver.wait(until.elementLocated(_locator), this.milisecondsTimeout);
      await this.driver.wait(until.elementIsVisible(element), this.milisecondsTimeout); 
      await this.driver.wait(until.elementIsEnabled(element), this.milisecondsTimeout);
      await this.driver.sleep(this.milisecondsDelay);
      const el = await this.driver.findElement(_locator);
      return el;
    };
    return new WebElementPromise(this.driver, _getElement(locator));
  }  
}

module.exports = BasePage;