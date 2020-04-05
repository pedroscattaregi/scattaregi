class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async getLoginFrame() {
    const iframeElement = await this.page.$("#loginIframe");
    return await iframeElement.contentFrame();
  }

  async login(line, password) {
    const loginFrame = await this.getLoginFrame();

    await loginFrame.waitForSelector("#idToken1");

    const usernameInput = await loginFrame.$("#idToken1");
    const passwordInput = await loginFrame.$("#idToken2");

    await usernameInput.type(line);
    await passwordInput.type(password);

    const submitButton = await loginFrame.$("#loginButton_0");
    await submitButton.click();
  }
}

module.exports = LoginPage;
