import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class EmailPage extends BasePage {

  private readonly emailTitleElement = "email-title";
  private readonly emailInputElement = "email-input";
  private readonly emailConfirmationInputElement = "email-confirmation-input";
  private readonly whyAskEmailLinkElement = "why-ask-email-link";
  private readonly emailContinueButtonElement = "email-continue-button";

  private get emailTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.emailTitleElement);
  }

  private get emailInput(): Promise<DriverElement> {
    return webdriver.getElement(this.emailInputElement);
  }

  private get emailConfirmationInput(): Promise<DriverElement> {
    return webdriver.getElement(this.emailConfirmationInputElement);
  }

  private get whyAskEmailLink(): Promise<DriverElement> {
    return webdriver.getElement(this.whyAskEmailLinkElement);
  }

  private get emailContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.emailContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.emailTitle).waitForExist();
    await (await this.emailInput).waitForExist();
    await (await this.emailConfirmationInput).waitForExist();
    await (await this.whyAskEmailLink).waitForExist();
    await (await this.emailContinueButton).waitForExist();
  }

  public async setEmailInputText(email: string): Promise<void> {
    const input = await this.emailInput;
    await input.click();
    await input.setValue(email);
  }

  public async setEmailConfirmationInputText(email: string): Promise<void> {
    const input = await this.emailConfirmationInput;
    await input.click();
    await input.setValue(email);
  }

  public async continue(): Promise<void> {
    const button = await this.emailContinueButton;
    await button.click();
  }
}

export default new EmailPage();