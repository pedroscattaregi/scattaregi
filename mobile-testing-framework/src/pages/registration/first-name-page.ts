import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class FirstNamePage extends BasePage {

  private readonly firstNameTitleElement = "first-name-title";
  private readonly firstNameInputElement = "first-name-input";
  private readonly termsAndConditionsElement = "terms-and-conditions-text";
  private readonly firstNameContinueButtonElement = "first-name-continue-button";

  private get firstNameTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.firstNameTitleElement);
  }

  private get firstNameInput(): Promise<DriverElement> {
    return webdriver.getElement(this.firstNameInputElement);
  }

  private get termsAndConditions(): Promise<DriverElement> {
    return webdriver.getElement(this.termsAndConditionsElement);
  }

  private get firstNameContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.firstNameContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.firstNameTitle).waitForExist();
    await (await this.firstNameInput).waitForExist();
    await (await this.termsAndConditions).waitForExist();
    await (await this.firstNameContinueButton).waitForExist();
  }

  public async setFirstNameInputText(firstName: string): Promise<void> {
    const input = await this.firstNameInput;
    await input.setValue(firstName);
  }

  public async openTermsAndConditions(): Promise<void> {
    const link = await this.termsAndConditions;
    await link.click();
  }

  public async continue(): Promise<void> {
    const button = await this.firstNameContinueButton;
    await button.click();
  }
}

export default new FirstNamePage();