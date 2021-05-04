import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

//complete name
class LegalNamePage extends BasePage {

  private readonly legalNameTitleElement = "legal-name-title";
  private readonly legalNameInputElement = "legal-name-input";
  private readonly legalNameContinueButtonElement = "legal-name-continue-button";

  private get legalNameTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.legalNameTitleElement);
  }

  private get legalNameInput(): Promise<DriverElement> {
    return webdriver.getElement(this.legalNameInputElement);
  }

  private get legalNameContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.legalNameContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.legalNameTitle).waitForExist();
    await (await this.legalNameInput).waitForExist();
    await (await this.legalNameContinueButton).waitForExist();
  }

  public async setLegalNameInputText(legalName: string): Promise<void> {
    const input = await this.legalNameInput;
    await input.setValue(legalName);
  }

  public async continue(): Promise<void> {
    const button = await this.legalNameContinueButton;
    await button.click();
  }
}

export default new LegalNamePage();