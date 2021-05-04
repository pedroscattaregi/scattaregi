import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class P2pTransferReceiverPage extends BasePage {

  private readonly transferReceiverPhoneNumberTitleElement = "default-form-title";
  private readonly transferReceiverPhoneNumberDescriptionElement = "default-form-description";
  private readonly transferReceiverPhoneNumberInputElement = "phone-number-input";
  //private readonly transferReceiverRecentContactsElement = "banqi-transfer-recent-contacts-title";
  private readonly transferReceiverPhoneNumberSubmitButtonElement = "transfer-receiver-continue-button";

  private get transferReceiverPhoneNumberTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.transferReceiverPhoneNumberTitleElement);
  }

  private get transferReceiverPhoneNumberDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.transferReceiverPhoneNumberDescriptionElement);
  }

  private get transferReceiverPhoneNumberInput(): Promise<DriverElement> {
    return webdriver.getElement(this.transferReceiverPhoneNumberInputElement);
  }

  // private get transferReceiverRecentContacts(): Promise<DriverElement> {
  //   return webdriver.getElement(this.transferReceiverRecentContactsElement);
  // }

  private get transferReceiverPhoneNumberSubmitButton(): Promise<DriverElement> {
    return webdriver.getElement(this.transferReceiverPhoneNumberSubmitButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.transferReceiverPhoneNumberTitle).waitForExist();
    await (await this.transferReceiverPhoneNumberDescription).waitForExist();
    await (await this.transferReceiverPhoneNumberInput).waitForExist();
    await (await this.transferReceiverPhoneNumberSubmitButton).waitForExist();
  }

  public async setReceiverPhoneNumberInput(phoneNumber: string): Promise<void> {
    const input = await this.transferReceiverPhoneNumberInput;
    await input.setValue(phoneNumber);
  }

  public async continue(): Promise<void> {
    const button = await this.transferReceiverPhoneNumberSubmitButton;
    await button.click();
  }
}

export default new P2pTransferReceiverPage();