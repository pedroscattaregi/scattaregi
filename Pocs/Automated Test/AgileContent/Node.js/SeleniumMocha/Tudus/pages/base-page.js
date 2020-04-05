const {until, error, WebElementPromise} = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.milisecondsTimeout = 5000;
    this.milisecondsDelay = 100; // ¯\_(ツ)_/¯
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

  async elementExists(locator) {
    try {
      await this.driver.wait(until.elementLocated(locator), this.milisecondsTimeout);
      return true;  
    } catch (e) {
      if (e instanceof error.TimeoutError) {
        return false;
      }
      throw e;      
    }
  }
}

module.exports = BasePage;