import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ReferralCodePage extends BasePage {

  private readonly referralCodeTitleElement = "referral-code-title";
  private readonly referralCodeInputElement = "referral-code-input";
  private readonly referralCodeTooltipElement = "referral-code-tooltip";
  private readonly referralCodeContinueButtonElement = "referral-code-continue-button";

  private get referralCodeTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.referralCodeTitleElement);
  }

  private get referralCodeInput(): Promise<DriverElement> {
    return webdriver.getElement(this.referralCodeInputElement);
  }

  private get referralCodeTooltip(): Promise<DriverElement> {
    return webdriver.getElement(this.referralCodeTooltipElement);
  }

  private get referralCodeContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.referralCodeContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.referralCodeTitle).waitForExist();
    await (await this.referralCodeInput).waitForExist();
    await (await this.referralCodeTooltip).waitForExist();
    await (await this.referralCodeContinueButton).waitForExist();
  }

  public async setreferralCodeInputText(referralCode: string): Promise<void> {
    const input = await this.referralCodeInput;
    await input.setValue(referralCode);
  }

  public async continue(): Promise<void> {
    const button = await this.referralCodeContinueButton;
    await button.click();
  }
}

export default new ReferralCodePage();