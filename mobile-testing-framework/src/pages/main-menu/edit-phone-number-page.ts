import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class EditPhoneNumberPage extends BasePage {

  private readonly editPhoneNumberTitleElement = "edit-phone-number-title";
  private readonly editPhoneNumberInputElement = "phone-number-input";
  private readonly editPhoneNumberContinueButtonElement = "edit-phone-number-continue-button";

  private get editPhoneNumberTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.editPhoneNumberTitleElement);
  }

  private get editPhoneNumberInput(): Promise<DriverElement> {
    return webdriver.getElement(this.editPhoneNumberInputElement);
  }

  private get editPhoneNumberContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.editPhoneNumberContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.editPhoneNumberTitle).waitForExist();
    await (await this.editPhoneNumberInput).waitForExist();
    await (await this.editPhoneNumberContinueButton).waitForExist();
  }

  public async setPhoneNumberInputText(phoneNumber: string): Promise<void> {
    const input = await this.editPhoneNumberInput;
    await input.setValue(phoneNumber);
  }

  public async continue(): Promise<void> {
    const button = await this.editPhoneNumberContinueButton;
    await button.click();
  }

}

export default new EditPhoneNumberPage();