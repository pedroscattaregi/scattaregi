import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class P2pTransferAmountPage extends BasePage {

  private readonly banQiTransferAmountTitleElement = "default-form-title";
  private readonly banQiTransferAmountDescriptionElement = "banqi-transfer-person-card";
  private readonly banQiTransferAmountInputElement = "banqi-transfer-amount-input";
  private readonly banQiTransferAmountContinueButtonElement = "banqi-transfer-amount-continue-button";

  private get banQiTransferAmountTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferAmountTitleElement);
  }

  private get banQiTransferAmountDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferAmountDescriptionElement);
  }

  private get banQiTransferAmountInput(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferAmountInputElement);
  }

  private get banQiTransferAmountContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferAmountContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.banQiTransferAmountTitle).waitForExist();
    await (await this.banQiTransferAmountDescription).waitForExist();
    await (await this.banQiTransferAmountInput).waitForExist();
    await (await this.banQiTransferAmountContinueButton).waitForExist();
  }

  public async setTransferAmountInput(amount: string): Promise<void> {
    const input = await this.banQiTransferAmountInput;
    await input.setValue(amount);
  }

  public async continue(): Promise<void> {
    const button = await this.banQiTransferAmountContinueButton;
    await button.click();
  }
}

export default new P2pTransferAmountPage();