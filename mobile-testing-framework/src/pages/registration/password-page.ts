import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class PasswordPage extends BasePage {

  private readonly passwordTitleElement = "password-title";
  private readonly passwordInputElement = "password-input";
  private readonly passwordConfirmationInputElement = "password-confirmation-input";
  private readonly passwordContinueButtonElement = "password-continue-button";

  private get passwordTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.passwordTitleElement);
  }

  private get passwordInput(): Promise<DriverElement> {
    return webdriver.getElement(this.passwordInputElement);
  }

  private get passwordConfirmationInput(): Promise<DriverElement> {
    return webdriver.getElement(this.passwordConfirmationInputElement);
  }

  private get passwordContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.passwordContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.passwordTitle).waitForExist();
    await (await this.passwordInput).waitForExist();
    await (await this.passwordConfirmationInput).waitForExist();
    await (await this.passwordContinueButton).waitForExist();
  }

  public async setPasswordInputText(password: string): Promise<void> {
    const input = await this.passwordInput;
    await input.click();
    await input.setValue(password);
  }

  public async setPasswordConfirmationInputText(password: string): Promise<void> {
    const input = await this.passwordConfirmationInput;
    await input.click();
    await input.setValue(password);
  }

  public async continue(): Promise<void> {
    const button = await this.passwordContinueButton;
    await button.click();
  }
}

export default new PasswordPage();