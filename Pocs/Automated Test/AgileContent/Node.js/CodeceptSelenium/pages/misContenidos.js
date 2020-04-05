const { I } = inject();

module.exports = {
    misContenidosText: { css: '#__next > div.Containerstyles__ContainerStyled-u23nnj-0.gDpWDo > div > div.Contentstyles__ContentStyled-sc-1d8fmh3-0.eNhHvt > div.ScrolledListstyles__TitleContainer-p5l0a6-3.eCitEW > h2' },

    validateMiBiblioteca() {
        I.waitForText('Mi biblioteca', 30, this.misContenidosText.css);
        I.see('Mi biblioteca');
    },
}
