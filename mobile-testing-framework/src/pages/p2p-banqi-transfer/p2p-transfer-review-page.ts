import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class P2pTransferReviewPage extends BasePage {

  private readonly banQiTransferReviewTitleElement = "banqi-transfer-review-title";
  private readonly banQiTransferReviewDescriptionElement = "banqi-transfer-review-description";
  private readonly banQiTransferReviewPersonCardElement = "banqi-transfer-review-person-card";
  private readonly banQiTransferReviewConfirmButtonElement = "banqi-transfer-review-confirm-button";
  private readonly banQiTransferReviewCancelButtonElement = "banqi-transfer-review-cancel-button";

  private get banQiTransferReviewTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferReviewTitleElement);
  }

  private get banQiTransferReviewDescription(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferReviewDescriptionElement);
  }

  private get banQiTransferReviewPersonCard(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferReviewPersonCardElement);
  }

  private get banQiTransferReviewConfirmButton(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferReviewConfirmButtonElement);
  }

  private get banQiTransferReviewCancelButton(): Promise<DriverElement> {
    return webdriver.getElement(this.banQiTransferReviewCancelButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.banQiTransferReviewTitle).waitForExist();
    await (await this.banQiTransferReviewDescription).waitForExist();
    await (await this.banQiTransferReviewPersonCard).waitForExist();
    await (await this.banQiTransferReviewConfirmButton).waitForExist();
    await (await this.banQiTransferReviewCancelButton).waitForExist();
  }

  public async confirmTransfer(): Promise<void> {
    const button = await this.banQiTransferReviewConfirmButton;
    await button.click();
  }
}

export default new P2pTransferReviewPage();