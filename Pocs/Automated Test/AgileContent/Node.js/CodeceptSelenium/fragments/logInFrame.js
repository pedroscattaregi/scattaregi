const { I } = inject();

module.exports = {
    root: '#loginIframe',

    fields: {
        user: '#idToken1',
        password: '#idToken2'
    },
    submitButton: { css: '#loginButton_0' },

    sendForm(user, password) {
        within({ frame: this.root }, () => {
            I.retry().waitForElement(this.fields.user, 20);
            I.retry().waitForVisible(this.fields.user, 20);
            I.fillField(this.fields.user, user);
            I.fillField(this.fields.password, password);
            I.click(this.submitButton);
        });
    }
}
