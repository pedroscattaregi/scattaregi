import DataConfig from "../Config/DataConfig";

class MainPage {

  ingresarButton = "#__next > header > div > div.Menustyles__ActionsContainerStyled-i7j8ux-0.eROpZb > button";
  misContenidosButton = "#dropMenu > div > div > div > div > ul > nav:nth-child(2) > div";
  header = "#__next > header";
  logoPersonal = "#__next > header > div > div:nth-child(1) > button > img";
  searchIcon = "#__next > header > div > div.Menustyles__SearchContainerStyled-i7j8ux-1.eBaLKn > div > button > span > span > i";
  iFrameLoginField = "#idToken1";
  iFramePasswordField = "#idToken2";
  iFrameLoginButton = "#loginButton_0";
  constructor() {
    this.config = new DataConfig();
  }

  visit() {
    cy.visit('');
  }
    
  cleanBrowser(){
    cy.clearCookies();
    cy.clearLocalStorage();
  }

  clickIngresar() {
    cy.get(this.ingresarButton)
     .click();
  }
  
  clickMisContenidos(){
    cy.get(this.misContenidosButton)
      .click();
  }
    
  iFrameLogin() {
    cy.get("iframe").then( $iframe => {
        const $doc = $iframe.contents();
        cy.wrap( $doc.find(this.iFrameLoginField) ).type( this.config.Login , { force: true });
        cy.wrap( $doc.find(this.iFramePasswordField) ).type( this.config.Password, { force: true });
        cy.wrap( $doc.find(this.iFrameLoginButton) ).click({ force: true });
    });
  }

  assertHeader() {
    cy.get(this.logoPersonal);
    cy.get(this.ingresarButton);
    cy.get(this.searchIcon);
  }
}
export default MainPage;