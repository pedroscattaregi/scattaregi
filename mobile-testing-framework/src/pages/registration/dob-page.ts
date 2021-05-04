import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

//complete name
class DobPage extends BasePage {

  private readonly dobTitleElement = "dob-title";
  private readonly dobInputElement = "dob-input";
  private readonly dobContinueButtonElement = "dob-continue-button";

  private get dobTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.dobTitleElement);
  }

  private get dobInput(): Promise<DriverElement> {
    return webdriver.getElement(this.dobInputElement);
  }

  private get dobContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.dobContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.dobTitle).waitForExist();
    await (await this.dobInput).waitForExist();
    await (await this.dobContinueButton).waitForExist();
  }

  public async setDobInputText(dob: string): Promise<void> {
    const input = await this.dobInput;
    await input.click();
    await input.setValue(dob);
  }

  public async continue(): Promise<void> {
    const button = await this.dobContinueButton;
    await button.click();
  }
}

export default new DobPage();