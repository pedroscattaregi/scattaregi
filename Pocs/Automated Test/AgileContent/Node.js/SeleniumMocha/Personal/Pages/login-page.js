const {By} = require('selenium-webdriver');
const BasePage = require('./base-page');

class LoginPage extends BasePage {

  constructor(driver) {
    super(driver);
    this.frameLocator = By.id('loginIframe');
    this.numeroDeLineaLocator = By.id('idToken1');
    this.clavePersonalLocator = By.id('idToken2');
    this.ingresarLocator = By.id('loginButton_0');
  }

  async login(credentials) {
    const frame = await this.getElement(this.frameLocator);
    await this.driver.sleep(2000); // ¯\_(ツ)_/¯ 
    await this.driver.switchTo().frame(frame);
    await this.driver.sleep(2000); // ¯\_(ツ)_/¯

    await this.getElement(this.numeroDeLineaLocator).sendKeys(credentials.username);
    await this.getElement(this.clavePersonalLocator).sendKeys(credentials.password);
    await this.getElement(this.ingresarLocator).click();

    await this.driver.switchTo().defaultContent();
  }
}

module.exports = LoginPage;