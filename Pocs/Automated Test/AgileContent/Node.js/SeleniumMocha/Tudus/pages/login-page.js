const {By} = require('selenium-webdriver');
const BasePage = require('./base-page');

class LoginPage extends BasePage {

  constructor(driver) {
    super(driver);
    this.userInputLocator = By.xpath('//input[@type="email"]');
    this.passInputLocator = By.xpath('//input[@type="password"]');
    this.enterButtonLocator = By.xpath('//span[text()="Entrar"]/..');
  }

  async login(user) {
    await this.getElement(this.userInputLocator).sendKeys(user.username);
    await this.getElement(this.passInputLocator).sendKeys(user.password);
    await this.getElement(this.enterButtonLocator).click(); 
  }
}

module.exports = LoginPage;