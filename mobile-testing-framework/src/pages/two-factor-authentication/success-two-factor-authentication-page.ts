import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class SuccessTwoFactorAuthenticationPage extends BasePage {

  private readonly accessAccountButtonElement = "two-factor-auth-success-access-my-account-button";

  private get accessAccountButton(): Promise<DriverElement> {
    return webdriver.getElement(this.accessAccountButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.accessAccountButton).waitForExist();
  }

  public async accessAccount(): Promise<void> {
    const button = await this.accessAccountButton;
    await button.click();
  }

}

export default new SuccessTwoFactorAuthenticationPage();