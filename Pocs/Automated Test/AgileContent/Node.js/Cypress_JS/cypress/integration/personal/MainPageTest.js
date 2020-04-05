import MainPage from '../../support/Pages/MainPage.js';

context('Home Juegos', () => {
    const mainPage = new MainPage();

    beforeEach(() => {
  		mainPage.visit();
    }) 

    it('Check Header Home Juegos', () => {
	  	MainPage.assertHeader();
    });
});