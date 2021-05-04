import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class MotherNamePage extends BasePage {

  private readonly motherNameTitleElement = "mother-name-title";
  private readonly motherNameInputElement = "mother-name-input";
  private readonly motherNameContinueButtonElement = "mother-name-continue-button";

  private get motherNameTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.motherNameTitleElement);
  }

  private get motherNameInput(): Promise<DriverElement> {
    return webdriver.getElement(this.motherNameInputElement);
  }

  private get motherNameContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.motherNameContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.motherNameTitle).waitForExist();
    await (await this.motherNameInput).waitForExist();
    await (await this.motherNameContinueButton).waitForExist();
  }

  public async setMotherNameInputText(motherName: string): Promise<void> {
    const input = await this.motherNameInput;
    await input.setValue(motherName);
  }

  public async continue(): Promise<void> {
    const button = await this.motherNameContinueButton;
    await button.click();
  }
}

export default new MotherNamePage();