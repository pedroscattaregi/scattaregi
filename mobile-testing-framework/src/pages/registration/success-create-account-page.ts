import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class SuccessCreateAccountPage extends BasePage {
  
  private readonly SuccessCreateAccountTitleElement = "modal-title";
  private readonly SuccessCreateAccountDescriptionElement = "modal-description";
  private readonly accessBanqiAccountElement = "access-banqi-account-after-registration";

  private get SuccessCreateAccountTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.SuccessCreateAccountTitleElement);
  }

  private get SuccessCreateAccountDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.SuccessCreateAccountDescriptionElement);
  }

  private get accessBanqiAccount(): Promise<DriverElement> {
    return webdriver.getElement(this.accessBanqiAccountElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.SuccessCreateAccountTitle).waitForExist();
    await (await this.SuccessCreateAccountDescription).waitForExist();
    await (await this.accessBanqiAccount).waitForExist();
  }

  public async goToBanqiAccount(): Promise<void> {
    const button = await this.accessBanqiAccount;
    await button.click();
  }
}

export default new SuccessCreateAccountPage();