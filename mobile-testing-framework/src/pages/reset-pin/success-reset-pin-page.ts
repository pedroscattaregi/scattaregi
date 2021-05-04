import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class SuccessResetPinPage extends BasePage {

  private readonly changePinTitleElement = "modal-title";
  private readonly changePinDescriptionElement = "modal-description";
  private readonly accessAccountButtonElement = "pin-reset-access-account-button";

  private get changePinTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.changePinTitleElement);
  }

  private get changePinDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.changePinDescriptionElement);
  }

  private get accessAccountButton(): Promise<DriverElement> {
    return webdriver.getElement(this.accessAccountButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.changePinTitle).waitForExist();
    await (await this.changePinDescription).waitForExist();
    await (await this.accessAccountButton).waitForExist();
  }

  public async getTitleText(): Promise<string> {
    const modalTitleText = await this.changePinTitle;
    return modalTitleText.getText();
  }

  public async getDescriptionText(): Promise<string> {
    const modalDescriptionText = await this.changePinDescription;
    return modalDescriptionText.getText();
  }

  public async accessAccount(): Promise<void> {
    const button = await this.accessAccountButton;
    await button.click();
  }

}

export default new SuccessResetPinPage();