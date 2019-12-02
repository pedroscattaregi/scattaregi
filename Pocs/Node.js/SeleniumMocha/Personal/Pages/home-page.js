const {By} = require('selenium-webdriver');
const BasePage = require('./base-page');

class HomePage extends BasePage {

  constructor(driver) {
    super(driver);
    this.ingresarLocator = By.xpath('//*[@id="__next"]/header/div/div[4]/button');
    this.perfilLocator = By.xpath('//*[@id="__next"]/header/div/div[4]/div/button');
    this.miContenidosLocator = By.xpath('//*[@id="dropMenu"]/div/div/div/div/ul/nav[1]/div');
  }

  async ingresar() {
    await this.getElement(this.ingresarLocator).click();
  }

  async goToMiBiblioteca() {
    await this.getElement(this.perfilLocator).click();   
    await this.getElement(this.miContenidosLocator).click();
  }
}

module.exports = HomePage;