import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class P2pTransferOptionsPage extends BasePage {

  private readonly withdrawTransferOptionElement = "withdraw-transfer-option";
  private readonly banqiTransferOptionElement = "banqi-transfer-option";

  private get withdrawTransferOption(): Promise<DriverElement> {
    return webdriver.getElement(this.withdrawTransferOptionElement);
  }

  private get banqiTransferOption(): Promise<DriverElement> {
    return webdriver.getElement(this.banqiTransferOptionElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.withdrawTransferOption).waitForExist();
    await (await this.banqiTransferOption).waitForExist();
  }

  public async goToWithdrawTransfer(): Promise<void> {
    const button = await this.withdrawTransferOption;
    await button.click();
  }

  public async goToBanqiTransfer(): Promise<void> {
    const button = await this.banqiTransferOption;
    await button.click();
  }
}

export default new P2pTransferOptionsPage();