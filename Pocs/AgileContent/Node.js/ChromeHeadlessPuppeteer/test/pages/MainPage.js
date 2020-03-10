class MainPage {
  constructor(page) {
    this.page = page;
    this._ingresarButtonXPath = "//*[@id='__next']/header/div/div[4]/button";
    this._dropdownXPath =
      "//*[@id='__next']/header/div/div[4]/div/button/span/span[2]";
    this._misContenidosButtonXPath =
      "//*[@id='dropMenu']/div/div/div/div/ul/nav[1]/div";
    this._miBibliotecaBlockXPath = "//*[@id='__next']/div[2]/div/div[2]";
  }

  async clickOnIngresar() {
    const [ingresarButton] = await this.page.$x(this._ingresarButtonXPath);

    await ingresarButton.click();
  }

  async openDropdown() {
    await this.page.waitForXPath(this._dropdownXPath);

    const [dropdown] = await this.page.$x(this._dropdownXPath);
    await dropdown.click();
  }

  async goToMisContenidos() {
    await this.openDropdown();

    const [misContenidosButton] = await page.$x(this._misContenidosButtonXPath);
    await misContenidosButton.click();
  }

  async checkMiBibliotecaBlockExistence() {
    await this.page.waitForXPath(this._miBibliotecaBlockXPath);

    const [miBibliotecaBlock] = await page.$x(this._miBibliotecaBlockXPath);

    if (!miBibliotecaBlock) return false;

    return true;
  }
}

module.exports = MainPage;
