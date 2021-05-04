import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class PinPage extends BasePage {

  private readonly pinTitleLabelElement = 'pin-title';
  private readonly pinInputCodeElement = 'pin-code-input';
  private readonly oldPinTitleElement = '//*[@text="Insira seu PIN antigo"]';
  private readonly newPinTitleElement = '//*[@content-desc="pin-title"]//*[contains(@text, "Escolha um novo PIN")]';
  private readonly confirmNewPinTitleElement = '//*[@content-desc="pin-title"]//*[contains(@text, "novamente")]';
  private readonly confirmButtonElement = '//*[contains(@text, "CONTINUAR")]';

  private get pinTitleLabel(): Promise<DriverElement> {
    return webdriver.getElement(this.pinTitleLabelElement);
  }

  private get pinInputCode(): Promise<DriverElement> {
    return webdriver.getElement(this.pinInputCodeElement);
  }

  private get oldPinTitle(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.oldPinTitleElement);
  }

  private get newPinTitle(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.newPinTitleElement);
  }

  private get confirmNewPinTitle(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.confirmNewPinTitleElement);
  }

  private get confirmButton(): Promise<DriverElement> {
    return webdriver.getElementByXpath(this.confirmButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.pinTitleLabel).waitForExist();
    await (await this.pinInputCode).waitForExist();
  }

  public async sendPin(pin: string): Promise<void> {
    const pinLenght = 4;
    await (await this.pinInputCode).click();
    
    for (let i =0; i < pinLenght; i++) {
      const convertKeyCodeNumberValue = 7;
      const pinValue = Number(pin[i]) + convertKeyCodeNumberValue;
      await driver.pressKeyCode(pinValue);
    }
  }

  public async waitOldPinScreen(): Promise<void> {
    await (await this.oldPinTitle).waitForExist();
  }

  public async waitNewPinScreen(): Promise<void> {
    await (await this.newPinTitle).waitForExist();
  }

  public async waitConfirmNewPinScreen(): Promise<void> {
    await (await this.confirmNewPinTitle).waitForExist();
  }

  public async continue(): Promise<void> {
    const button = await this.confirmButton;
    await button.click();
  }

}

export default new PinPage();