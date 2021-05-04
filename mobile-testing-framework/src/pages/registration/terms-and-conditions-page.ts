import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class TermsAndConditionsPage extends BasePage {

  private readonly goBackButtonElement = "arrow-back-button";
  private readonly tersAndConditionsView = '//*[@resource-id="video-player"]';

  private get goBackButton(): Promise<DriverElement> {
    return webdriver.getElement(this.goBackButtonElement);
  }

  private get tersAndConditions(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.tersAndConditionsView);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.goBackButton).waitForExist();
    await (await this.tersAndConditions).waitForExist();
  }

}

export default new TermsAndConditionsPage();