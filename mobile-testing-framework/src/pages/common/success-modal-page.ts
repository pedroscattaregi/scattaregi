import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class SuccessModalPage extends BasePage {

  private readonly successModalTitleElement = "modal-title";
  private readonly successModalDescriptionElement = "modal-description";
  private readonly successModalCloseButtonElement = "modal-success-close-button";

  private get successModalTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.successModalTitleElement);
  }

  private get successModalDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.successModalDescriptionElement);
  }

  private get successModalCloseButton(): Promise<DriverElement> {
    return webdriver.getElement(this.successModalCloseButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.successModalTitle).waitForExist();
    await (await this.successModalDescription).waitForExist();
    await (await this.successModalCloseButton).waitForExist();
  }

  public async closeModal(): Promise<void> {
    const button = await this.successModalCloseButton;
    await button.click();
  }

  public async getSuccessModalTitleText(): Promise<string> {
    const modalTitleText = await this.successModalTitle;
    return modalTitleText.getText();
  }

  public async getSuccessModalDescriptionText(): Promise<string> {
    const modalDescriptionText = await this.successModalDescription;
    return modalDescriptionText.getText();
  }

}

export default new SuccessModalPage();