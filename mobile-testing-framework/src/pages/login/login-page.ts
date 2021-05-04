import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class LoginPage extends BasePage {

  private readonly cpfInputElement = "login-cpf-input";
  private readonly passwordInputElement = "login-password-input";
  private readonly confirmButtonElement = "login-confirm-button";
  private readonly forgotPasswordButtonElement = "login-forgot-password";

  private get cpfInput(): Promise<DriverElement> {
    return webdriver.getElement(this.cpfInputElement);
  }

  private get passwordInput(): Promise<DriverElement> {
    return webdriver.getElement(this.passwordInputElement);
  }

  private get confirmButton(): Promise<DriverElement> {
    return webdriver.getElement(this.confirmButtonElement);
  }

  private get forgotPasswordButton(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.cpfInput).waitForExist();
    await (await this.passwordInput).waitForExist();
    await (await this.confirmButton).waitForExist();
    await (await this.forgotPasswordButton).waitForExist();
  }

  private async setCPFInputText(cpf: string): Promise<void> {
    const input = await this.cpfInput;
    await input.setValue(cpf);
  }

  private async setpasswordInputText(password: string): Promise<void> {
    const input = await this.passwordInput;
    await input.setValue(password);
  }

  private async clickConfirmButton(): Promise<void> {
    const button = await this.confirmButton;
    await button.click();
  }

  public async clickForgotPasswordButton(): Promise<void> {
    const button = await this.forgotPasswordButton;
    await button.click();
  }

  public async performLogin(cpf: string, password: string): Promise<void> {
    await this.setCPFInputText(cpf);
    await this.setpasswordInputText(password);
    await this.clickConfirmButton();
  }
}
// noinspection JSUnusedGlobalSymbols
export default new LoginPage();