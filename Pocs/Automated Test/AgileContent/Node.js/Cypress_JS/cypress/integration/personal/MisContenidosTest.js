import MainPage from '../../support/Pages/MainPage.js';
import MisContenidos from '../../support/Pages/MisContenidos.js';

context('Home Juegos', () => {
    const mainPage = new MainPage();
    const misContenidos = new MisContenidos();

    beforeEach(() => {
        mainPage.visit();
    })

    it('Check Mi biblioteca', () => {

        //Click on 'Ingresar'
        mainPage.clickIngresar();
        
        //Sign in to iframe
        cy.wait(10000);
        mainPage.iFrameLogin();

        //Access Mis Contenidos
        mainPage.clickIngresar();
        mainPage.clickMisContenidos();

        //Assert
        cy.wait(10000);
        misContenidos.assertMiBiblioteca();
    });
});