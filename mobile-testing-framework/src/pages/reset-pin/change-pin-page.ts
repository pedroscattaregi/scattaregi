import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ChangePinPage extends BasePage {

  private readonly changePinTitleElement = "modal-title";
  private readonly changePinDescriptionElement = "modal-description";
  private readonly confirmChangePinButtonElement = "confirm-pin-change-button";

  private get changePinTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.changePinTitleElement);
  }

  private get changePinDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.changePinDescriptionElement);
  }

  private get confirmChangePinButton(): Promise<DriverElement> {
    return webdriver.getElement(this.confirmChangePinButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.changePinTitle).waitForExist();
    await (await this.changePinDescription).waitForExist();
    await (await this.confirmChangePinButton).waitForExist();
  }

  public async startPinChange(): Promise<void> {
    const button = await this.confirmChangePinButton;
    await button.click();
  }

  public async getTitleText(): Promise<string> {
    const modalTitleText = await this.changePinTitle;
    return modalTitleText.getText();
  }

  public async getDescriptionText(): Promise<string> {
    const modalDescriptionText = await this.changePinDescription;
    return modalDescriptionText.getText();
  }

}

export default new ChangePinPage();