import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class LoadingModalPage extends BasePage {

  private readonly modalLoadingTextElement = "loading-text";

  private get modalLoadingText(): Promise<DriverElement> {
    return webdriver.getElement(this.modalLoadingTextElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.modalLoadingText).waitForExist();
  }

  public async getModalLoadingTextMessage(): Promise<string> {
    const redErrorMessage = await this.modalLoadingText;
    return redErrorMessage.getText();
  }
}

export default new LoadingModalPage();
