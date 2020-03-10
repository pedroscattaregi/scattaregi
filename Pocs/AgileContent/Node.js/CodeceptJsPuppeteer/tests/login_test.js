
Feature('Login');

const dataconf = require('../dataconf');

Before((I) =>{
	I.amOnPage(dataconf.mainURL);
});

Scenario('test login', (I, mainPage, loginIframeFragment, misContenidosPage) => {

	mainPage.clickOnIngresarButton();

	loginIframeFragment.sendForm(dataconf.users.testUser.user, dataconf.users.testUser.password);

	mainPage.clickOnUserMenuDropDown();
	mainPage.clickOnMisContenidosButton();

	misContenidosPage.validateMiBiblioteca();

});
