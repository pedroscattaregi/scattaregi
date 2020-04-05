
Feature('TestWebSelenium');

const dataconf = require('../dataconf');

Before((I) => {
    I.amOnPage(dataconf.mainURL);
});

Scenario('test login', (I, mainPage, logInFrame, misContenidos) => {

    mainPage.clickOnIngresarButton();
    
    logInFrame.sendForm(dataconf.users.testUser.user, dataconf.users.testUser.password);

    mainPage.clickOnUserMenuDropDown();
    mainPage.clickOnMisContenidosButton();

    misContenidos.validateMiBiblioteca();

});
