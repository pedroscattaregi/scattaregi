class MisContenidos {
    
  miBibliotecaBlock = "#__next > div.Containerstyles__ContainerStyled-u23nnj-0.gDpWDo > div > div.Contentstyles__ContentStyled-sc-1d8fmh3-0.eNhHvt > div.CardContainerstyles__CardsArea-hvw2n0-2.iITKtA";

  visit() {
     cy.visit('/mis-contenidos');
  }
    
  cleanBrowser(){
        cy.clearCookies();
        cy.clearLocalStorage();
  }

  assertMiBiblioteca() {
    return cy.get(this.miBibliotecaBlock);
  }

}
  export default MisContenidos;