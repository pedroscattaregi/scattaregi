import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ForgotPasswordPage extends BasePage {

  private readonly forgotPasswordTitleElement = "forgot-password-title";
  private readonly forgotPasswordSubtitleElement = "forgot-password-subtitle";
  private readonly forgotPasswordInputEmailElement = "forgot-password-email-input";
  private readonly forgotPasswordchangeEmailTextElement = "forgot-password-change-email-text";
  private readonly forgotPasswordchangeEmailLinkElement = "forgot-password-change-email-link";
  private readonly forgotPasswordSendemailButtonElement = "forgot-password-send-email-button";
  
  private get forgotPasswordTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordTitleElement);
  }

  private get forgotPasswordSubtitle(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordSubtitleElement);
  }

  private get forgotPasswordInputEmail(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordInputEmailElement);
  }

  private get forgotPasswordchangeEmailText(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordchangeEmailTextElement);
  }

  private get forgotPasswordchangeEmailLink(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordchangeEmailLinkElement);
  }

  private get forgotPasswordSendemailButton(): Promise<DriverElement> {
    return webdriver.getElement(this.forgotPasswordSendemailButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.forgotPasswordTitle).waitForExist();
    await (await this.forgotPasswordSubtitle).waitForExist();
    await (await this.forgotPasswordInputEmail).waitForExist();
    await (await this.forgotPasswordchangeEmailText).waitForExist();
    await (await this.forgotPasswordchangeEmailLink).waitForExist();
    await (await this.forgotPasswordSendemailButton).waitForExist();
  }

  public async sendAccountEmail(email: string): Promise<void> {
    const input = await this.forgotPasswordInputEmail;
    await input.setValue(email);
    const button = await this.forgotPasswordSendemailButton;
    await button.click();
  }

}

export default new ForgotPasswordPage();