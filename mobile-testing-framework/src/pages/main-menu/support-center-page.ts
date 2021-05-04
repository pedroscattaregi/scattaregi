import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class SupportCenterPage extends BasePage {

  private readonly  supportScreenTitleElement = "support-screen-title";
  private readonly  ViaAppSupportOptionElement = "in-app-support-option";
  private readonly  ViaWhatsappSupportOptionElement = "whatsapp-support-option";
  private readonly  ByphoneSupportOptionElement = "phone-support-option";
  private readonly  MoreOptionsTitleElement = "more-options-title";
  private readonly  banQiManualOptionElement = "banQi-manual-option";

  private get supportScreenTitle(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.supportScreenTitleElement);
  }

  private get ViaAppSupportOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.ViaAppSupportOptionElement);
  }

  private get ViaWhatsappSupportOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.ViaWhatsappSupportOptionElement);
  }

  private get ByphoneSupportOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.ByphoneSupportOptionElement);
  }

  private get MoreOptionsTitle(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.MoreOptionsTitleElement);
  }

  private get banQiManualOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.banQiManualOptionElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.supportScreenTitle).waitForExist();
    await (await this.ViaAppSupportOption).waitForExist();
    await (await this.ViaWhatsappSupportOption).waitForExist();
    await (await this.ByphoneSupportOption).waitForExist();
    await (await this.MoreOptionsTitle).waitForExist();
    await (await this.banQiManualOption).waitForExist();
  }

}
// noinspection JSUnusedGlobalSymbols
export default new SupportCenterPage();