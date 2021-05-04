import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class AlreadyCreatedAccountLoginPage extends BasePage {

  private readonly alreadyCreatedAccountTitleElement = '//*[@text="Alguém já criou uma conta com esse CPF!"]';
  private readonly alreadyCreatedAccountpasswordInputElement = "login-password-input";
  private readonly confirmButtonElement = "login-confirm-button";
  private readonly forgotPasswordButtonElement = "login-forgot-password";

  private get alreadyCreatedAccountTitle(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.alreadyCreatedAccountTitleElement);
  }

  private get alreadyCreatedAccountpasswordInput(): Promise<DriverElement> {
    return webdriver.getElement(this.alreadyCreatedAccountpasswordInputElement);
  }

  private get confirmButton(): Promise<DriverElement> {
    return webdriver.getElement(this.confirmButtonElement);
  }

  private get forgotPasswordButton(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.alreadyCreatedAccountTitle).waitForExist();
    await (await this.alreadyCreatedAccountpasswordInput).waitForExist();
    await (await this.confirmButton).waitForExist();
    await (await this.forgotPasswordButton).waitForExist();
  }

}

export default new AlreadyCreatedAccountLoginPage();