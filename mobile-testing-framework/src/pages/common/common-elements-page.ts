import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class CommonElementsPage extends BasePage {

  private readonly goBackButtonElement = "arrow-back-button";
  private readonly redErrorMessageElement = "input-red-error-message";

  private get goBackButton(): Promise<DriverElement> {
    return webdriver.getElement(this.goBackButtonElement);
  }

  private get redErrorMessage(): Promise<DriverElement> {
    return webdriver.getElement(this.redErrorMessageElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.goBackButton).waitForExist();
    await (await this.redErrorMessage).waitForExist();
  }

  public async goBack(): Promise<void> {
    const button = await this.goBackButton;
    await button.click();
  }

  public async getRedErrorMessage(): Promise<string> {
    const redErrorMessage = await (await this.redErrorMessage).getText();
    return redErrorMessage;
  }
}

export default new CommonElementsPage();
