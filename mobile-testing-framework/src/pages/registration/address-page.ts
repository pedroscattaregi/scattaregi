import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class AddressPage extends BasePage {

  private readonly addressTitleElement = "address-title";
  private readonly addressZipcodeInputElement = "address-details-postal-code-input";
  private readonly addressInputElement = "address-input";
  private readonly addressNumberInputElement = "address-number-input";
  private readonly addressComplementInputElement = "address-complement-input";
  private readonly addressNeighborhoodInputElement = "address-neighborhood-input";
  private readonly addressCityInputElement = "address-city-input";
  private readonly addressStateInputElement = "address-state-input-select";
  private readonly addressContinueButtonElement = "address-continue-button";

  private get addressTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.addressTitleElement);
  }

  private get addressZipcodeInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressZipcodeInputElement);
  }

  public get addressInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressInputElement);
  }

  private get addressNumberInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressNumberInputElement);
  }

  public get addressComplementInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressComplementInputElement);
  }

  public get addressNeighborhoodInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressNeighborhoodInputElement);
  }

  public get addressCityInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressCityInputElement);
  }

  public get addressStateInput(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressStateInputElement);
  }

  private get addressContinueButton(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.addressContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.addressTitle).waitForExist();
    await (await this.addressZipcodeInput).waitForExist();
    await (await this.addressInput).waitForExist();
    await (await this.addressNumberInput).waitForExist();
    await (await this.addressComplementInput).waitForExist();
    await (await this.addressNeighborhoodInput).waitForExist();
    await (await this.addressCityInput).waitForExist();
    await (await this.addressStateInput).waitForExist();
    await (await this.addressContinueButton).waitForExist();
  }

  public async setAddressInputText(address: string): Promise<void> {
    const input = await this.addressInput;
    await input.setValue(address);
  }

  public async setZipcodeInputText(zipcode: string): Promise<void> {
    const input = await this.addressZipcodeInput;
    await input.setValue(zipcode);
  }

  public async setNumberInputText(number: string): Promise<void> {
    const input = await this.addressNumberInput;
    await input.setValue(number);
  }

  public async continue(): Promise<void> {
    const button = await this.addressContinueButton;
    await button.click();
  }
}

export default new AddressPage();