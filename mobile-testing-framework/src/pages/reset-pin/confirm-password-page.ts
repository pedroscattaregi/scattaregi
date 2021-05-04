import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ConfirmPasswordPage extends BasePage {

  private readonly confirmPasswordTitleElement = "pin-reset-confirm-password-title";
  private readonly confirmPasswordInputElement = "pin-reset-confirm-password-input";
  private readonly confirmPasswordButtonElement = "pin-reset-confirm-password-continue-button";

  private get confirmPasswordTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.confirmPasswordTitleElement);
  }

  private get confirmPasswordInput(): Promise<DriverElement> {
    return webdriver.getElement(this.confirmPasswordInputElement);
  }

  private get confirmPasswordButton(): Promise<DriverElement> {
    return webdriver.getElement(this.confirmPasswordButtonElement);
  }
  
  public async checkRequiredPageElements(): Promise<void> {
    await (await this.confirmPasswordTitle).waitForExist();
    await (await this.confirmPasswordInput).waitForExist();
    await (await this.confirmPasswordButton).waitForExist();
  }

  public async setPasswordInputText(password: string): Promise<void> {
    const input = await this.confirmPasswordInput;
    await input.setValue(password);
  }

  public async clickConfirmButton(): Promise<void> {
    const button = await this.confirmPasswordButton;
    await button.click();
  }

}

export default new ConfirmPasswordPage();