const { I } = inject();

module.exports = {

    ingresarButton: { css: '#__next > header > div > div.Menustyles__ActionsContainerStyled-i7j8ux-0.eROpZb > button' },

    userMenuDropDown: { css: '#__next > header > div > div.Menustyles__ActionsContainerStyled-i7j8ux-0.jgdWSC > div > button' },

    misContenidosButton: { css: '#dropMenu > div > div > div > div > ul > nav:nth-child(2) > div' },



    clickOnIngresarButton() {
        I.waitForElement(this.ingresarButton, 30);
        I.waitForVisible(this.ingresarButton, 30);
        I.click(this.ingresarButton);
    },

    clickOnUserMenuDropDown() {
        I.waitForElement(this.userMenuDropDown, 30);
        I.waitForVisible(this.userMenuDropDown, 30);
        I.click(this.userMenuDropDown);
    },

    clickOnMisContenidosButton() {
        I.waitForElement(this.misContenidosButton, 30);
        I.waitForVisible(this.misContenidosButton, 30);
        I.click(this.misContenidosButton);
    }

}
