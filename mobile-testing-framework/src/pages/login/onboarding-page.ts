import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from "@root/src/utils/webdriver/driver-element";

class OnboardingPage extends BasePage {

  private readonly beginButtonElement = 'onboarding-complete-button';

  private get beginButton(): Promise<DriverElement> {
    return webdriver.getElement(this.beginButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.beginButton).waitForExist();
  }

  public async jumpOnboardingScreens(): Promise<void> {
    const button = await this.beginButton;
    button.click();
  }
}

export default new OnboardingPage();