const {By} = require('selenium-webdriver');
const BasePage = require('./base-page');
const config = require('../config/config');

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
    this.loginButtonLocator = By.xpath('//span[text()="Login"]/..');
    this.olaButtonTextLocator = By.xpath('//header//button//span[contains(text(), "Olá, ")]');    
    this.olaButtonLocator = By.xpath('//header//button//span[contains(text(), "Olá, ")]/..');    
    this.sairButtonLocator = By.xpath('//header//ul/li[contains(text(), "Sair")]');        
  }

  async clickLogin() {
    await this.getElement(this.loginButtonLocator).click();
  }

  async isLoginButtonVisible() {
    return await this.elementExists(this.loginButtonLocator);
  }

  async getUserButtonText() {
    return await this.getElement(this.olaButtonTextLocator).getText();
  }

  async isLogged() {
    return await this.elementExists(this.olaButtonLocator);
  }

  async logOff() {
    await this.getElement(this.olaButtonLocator).click();
    await this.getElement(this.sairButtonLocator).click();
    await this.driver.get(config.baseURL);
  }
}

module.exports = HomePage;