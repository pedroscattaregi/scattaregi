import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ReviewInformationErrorPage extends BasePage {

  private readonly ReviewInformationErrorTitleElement = "modal-title";
  private readonly ReviewInformationErrorTextElement = 'modal-description';
  private readonly ReviewButtonElement = '//*[@text="REVISAR"]';
  private readonly ContactWhatsAppButtonElement = '//*[@text="FALAR CONOSCO PELO WHATSAPP"]';

  private get ReviewInformationErrorTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.ReviewInformationErrorTitleElement);
  }

  private get ReviewInformationErrorText(): Promise<DriverElement> {
    return webdriver.getElement(this.ReviewInformationErrorTextElement);
  }

  private get ReviewButton(): Promise<DriverElement> {
    return webdriver.getElement(this.ReviewButtonElement);
  }

  private get ContactWhatsAppButton(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.ContactWhatsAppButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.ReviewInformationErrorTitle).waitForExist();
    await (await this.ReviewInformationErrorText).waitForExist();
    await (await this.ReviewButton).waitForExist();
    await (await this.ContactWhatsAppButton).waitForExist();
  }

}

export default new ReviewInformationErrorPage();