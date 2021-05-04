import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class AccountSettingsPage extends BasePage {

  private readonly allowNotificationslabelElement = "allow-notifications-label";
  private readonly allowNotificationsSwitchButtonElement = "allow-notifications-switch-button";
  private readonly resetPinOptionElement = "change-pin-option"; 

  private get allowNotificationslabel(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.allowNotificationslabelElement);
  }

  private get allowNotificationsSwitchButton(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.allowNotificationsSwitchButtonElement);
  }

  private get resetPinOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.resetPinOptionElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.allowNotificationslabel).waitForExist();
    await (await this.allowNotificationsSwitchButton).waitForExist();
    await (await this.resetPinOption).waitForExist();
  }

  public async chooseResetPinOption(): Promise<void> {
    const button = await this.resetPinOption;
    await button.click();
  }

}
// noinspection JSUnusedGlobalSymbols
export default new AccountSettingsPage();