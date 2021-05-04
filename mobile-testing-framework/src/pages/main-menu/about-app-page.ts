import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class AboutAppPage extends BasePage {

  private readonly aboutAppVersionSubtitleElement = "about-app-version";
  private readonly aboutAppTextSectionElement = "about-app-text";

  private get aboutAppVersionSubtitle(): Promise<DriverElement> {
    return webdriver.getElement(this.aboutAppVersionSubtitleElement);
  }

  private get aboutAppTextSection(): Promise<DriverElement> {
    return webdriver.getElement(this.aboutAppTextSectionElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.aboutAppVersionSubtitle).waitForExist();
    await (await this.aboutAppTextSection).waitForExist();
  }

}

export default new AboutAppPage();