const {By} = require('selenium-webdriver');
const BasePage = require('./base-page');

class MisContenidos extends BasePage{

  constructor(driver) {
    super(driver);
    this.titleContainer = By.xpath('//div[contains(@class, "TitleContainer")]/h2[text()="Mi biblioteca"]');    
  }

  async geTtitleContainerText() {
    return await this.getElement(this.titleContainer).getText();
  }
}

module.exports = MisContenidos;