import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class PrivacyPolicyPage extends BasePage {

  private readonly goBackButtonElement = "arrow-back-button";
  private readonly privacyAndPolicyViewElement = '//*[@resource-id="video-player"]';

  private get goBackButton(): Promise<DriverElement> {
    return webdriver.getElement(this.goBackButtonElement);
  }

  private get privacyAndPolicyView(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.privacyAndPolicyViewElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.goBackButton).waitForExist();
    await (await this.privacyAndPolicyView).waitForExist();
  }

}

export default new PrivacyPolicyPage();