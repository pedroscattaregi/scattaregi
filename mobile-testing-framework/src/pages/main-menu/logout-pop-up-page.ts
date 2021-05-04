import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class LogoutPopUpPage extends BasePage {

  private readonly logoutTitleElement = "logout-pop-up-title";
  private readonly logoutDescriptionElement = "logout-pop-up-description";
  private readonly logoutCancelationOptionElement = "logout-pop-up-cancel-option";
  private readonly logoutConfirmOptionElement = "logout-pop-up-confirm-option";

  private get logoutTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.logoutTitleElement);
  }

  private get logoutDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.logoutDescriptionElement);
  }

  private get logoutCancelationOption(): Promise<DriverElement> {
    return webdriver.getElement(this.logoutCancelationOptionElement);
  }

  private get logoutConfirmOption(): Promise<DriverElement> {
    return webdriver.getElement(this.logoutConfirmOptionElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.logoutTitle).waitForExist();
    await (await this.logoutDescription).waitForExist();
    await (await this.logoutCancelationOption).waitForExist();
    await (await this.logoutConfirmOption).waitForExist();
  }

  public async cancelLogout(): Promise<void> {
    const button = await this.logoutCancelationOption;
    await button.click();
  }

}

export default new LogoutPopUpPage();