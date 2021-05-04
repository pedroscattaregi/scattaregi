import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class WelcomePage extends BasePage {

  private readonly createAccountButtonElement = 'welcome-create-account-button';
  private readonly cdcLiteLinkElement = 'welcome-view-carnes-button';
  private readonly loginLinkElement = 'welcome-login-button';

  private get createAccountButton(): Promise<DriverElement> {
    return webdriver.getElement(this.createAccountButtonElement);
  }

  private get cdcLiteLink(): Promise<DriverElement> {
    return webdriver.getElement(this.cdcLiteLinkElement);
  }

  private get loginLink(): Promise<DriverElement> {
    return webdriver.getElement(this.loginLinkElement);
  }

  public async hasRequiredPageElements(): Promise<boolean> {
    const createAccountButton = await (await this.createAccountButton).waitForExist();
    const cdcLiteLink = await (await this.cdcLiteLink).waitForExist();
    const loginLink = await (await this.loginLink).waitForExist();
    
    return createAccountButton && cdcLiteLink && loginLink;
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.createAccountButton).waitForExist();
    await (await this.cdcLiteLink).waitForExist();
    await (await this.loginLink).waitForExist();
  }

  public async goToRegistrationFlow(): Promise<void> {
    const button = await this.createAccountButton;
    await button.click();
  }

  public async accessCDCLite(): Promise<void> {
    const button = await this.cdcLiteLink;
    await button.click();
  }

  public async goToLoginPage(): Promise<void> {
    const button = await this.loginLink;
    await button.click();
  }

}

export default new WelcomePage();