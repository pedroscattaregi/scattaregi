import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class UnverifiedDevicePage extends BasePage {

  private readonly startTwoFactorAuthProcessButtonElement = "two-factor-auth-unverified-device-button-verify-device";

  private get startTwoFactorAuthProcessButton(): Promise<DriverElement> {
    return webdriver.getElement(this.startTwoFactorAuthProcessButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.startTwoFactorAuthProcessButton).waitForExist();
  }

  public async startTwoFactorAuth(): Promise<void> {
    const button = await this.startTwoFactorAuthProcessButton;
    await button.click();
  }

}

export default new UnverifiedDevicePage();