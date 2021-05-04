import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class TwoFactorAuthOptionsPage extends BasePage {

  private readonly twoFactorAuthOptionEmailOptionElement = '//*[contains(@text, "e-mail")]';
  private readonly twoFactorAuthOptionContinueButtonElement = "two-factor-auth-choose-verification-button-ok";

  private get twoFactorAuthOptionEmailOption(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.twoFactorAuthOptionEmailOptionElement);
  }

  private get twoFactorAuthOptionContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.twoFactorAuthOptionContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.twoFactorAuthOptionEmailOption).waitForExist();
    await (await this.twoFactorAuthOptionContinueButton).waitForExist();
  }

  public async selectEmailOption(): Promise<void> {
    const button = await this.twoFactorAuthOptionEmailOption;
    await button.click();
  }

  public async continue(): Promise<void> {
    const button = await this.twoFactorAuthOptionContinueButton;
    await button.click();
  }

}

export default new TwoFactorAuthOptionsPage();