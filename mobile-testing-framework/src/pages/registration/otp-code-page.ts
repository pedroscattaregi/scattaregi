import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class OtpCodePage extends BasePage {

  private readonly otpCodeTitleElement = "phone-otp-code-title";
  private readonly otpCodeInputElement = "phone-otp-code-input";
  private readonly skipOtpCodeValidationElement = "phone-otp-skip";
  private readonly otpCodeContinueButtonElement = "phone-otp-code-continue-button";

  private get otpCodeTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.otpCodeTitleElement);
  }

  private get otpCodeInput(): Promise<DriverElement> {
    return webdriver.getElement(this.otpCodeInputElement);
  }

  private get skipOtpCodeValidationButton(): Promise<DriverElement> {
    return webdriver.getElement(this.skipOtpCodeValidationElement);
  }

  
  private get otpCodeContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.otpCodeContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.otpCodeTitle).waitForExist();
    await (await this.otpCodeInput).waitForExist();
    await (await this.otpCodeContinueButton).waitForExist();
  }

  public async setotpCodeInputText(otpCode: string): Promise<void> {
    const input = await this.otpCodeInput;
    await input.setValue(otpCode);
  }

  public async skipOtpCodeValidation(): Promise<void> {
    const button = await this.skipOtpCodeValidationButton;
    await button.click();
  }

  public async continue(): Promise<void> {
    const button = await this.otpCodeContinueButton;
    await button.click();
  }
}

export default new OtpCodePage();