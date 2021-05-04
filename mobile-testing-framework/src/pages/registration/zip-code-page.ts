import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ZipCodePage extends BasePage {

  private readonly zipCodeTitleElement = "address-postal-code-title";
  private readonly zipCodeInputElement = "address-postal-code-input";
  private readonly zipCodeContinueButtonElement = "address-postal-code-continue-button";

  private get zipCodeTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.zipCodeTitleElement);
  }

  private get zipCodeInput(): Promise<DriverElement> {
    return webdriver.getElement(this.zipCodeInputElement);
  }

  private get zipCodeContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.zipCodeContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.zipCodeTitle).waitForExist();
    await (await this.zipCodeInput).waitForExist();
    await (await this.zipCodeContinueButton).waitForExist();
  }

  public async setZipCodeInputText(zipCode: string): Promise<void> {
    const input = await this.zipCodeInput;
    await input.setValue(zipCode);
  }

  public async continue(): Promise<void> {
    const button = await this.zipCodeContinueButton;
    await button.click();
  }
}

export default new ZipCodePage();