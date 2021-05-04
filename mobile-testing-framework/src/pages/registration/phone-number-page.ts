import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class PhoneNumberPage extends BasePage {

  private readonly phoneNumberTitleElement = "phone-number-title";
  private readonly phoneNumberInputElement = "phone-number-input";
  private readonly phoneNumberTooltipElement = "phone-number-tooltip";
  private readonly phoneNumberContinueButtonElement = "phone-number-continue-button";

  private get phoneNumberTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.phoneNumberTitleElement);
  }

  private get phoneNumberInput(): Promise<DriverElement> {
    return webdriver.getElement(this.phoneNumberInputElement);
  }

  private get phoneNumberTooltip(): Promise<DriverElement> {
    return webdriver.getElement(this.phoneNumberTooltipElement);
  }

  
  private get phoneNumberContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.phoneNumberContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.phoneNumberTitle).waitForExist();
    await (await this.phoneNumberInput).waitForExist();
    await (await this.phoneNumberTooltip).waitForExist();
    await (await this.phoneNumberContinueButton).waitForExist();
  }

  public async setPhoneNumberInputText(phoneNumber: string): Promise<void> {
    const input = await this.phoneNumberInput;
    await input.setValue(phoneNumber);
  }

  public async continue(): Promise<void> {
    const button = await this.phoneNumberContinueButton;
    await button.click();
  }
}

export default new PhoneNumberPage();