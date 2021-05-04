import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class TwoFactorOtpCodePage extends BasePage {

  private readonly otpCodeInputElement = "phone-otp-code-input";
  private readonly otpCodeContinueButtonElement = "phone-otp-code-continue-button";

  private get otpCodeInput(): Promise<DriverElement> {
    return webdriver.getElement(this.otpCodeInputElement);
  }
  
  private get otpCodeContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.otpCodeContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.otpCodeInput).waitForExist();
    await (await this.otpCodeContinueButton).waitForExist();
  }

  public async setOtpCodeInputText(otpCode: string): Promise<void> {
    const input = await this.otpCodeInput;
    await input.setValue(otpCode);
  }

  public async continue(): Promise<void> {
    const button = await this.otpCodeContinueButton;
    await button.click();
  }
}

export default new TwoFactorOtpCodePage();