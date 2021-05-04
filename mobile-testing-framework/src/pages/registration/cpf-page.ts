import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class CpfPage extends BasePage {

  private readonly cpfTitleElement = "cpf-title";
  private readonly cpfInputElement = "cpf-input";
  private readonly whyAskCpfLinkElement = "why-ask-cpf-link";
  private readonly cpfContinueButtonElement = "cpf-continue-button";

  private get cpfTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.cpfTitleElement);
  }

  private get cpfInput(): Promise<DriverElement> {
    return webdriver.getElement(this.cpfInputElement);
  }

  private get whyAskCpfLink(): Promise<DriverElement> {
    return webdriver.getElement(this.whyAskCpfLinkElement);
  }

  private get cpfContinueButton(): Promise<DriverElement> {
    return webdriver.getElement(this.cpfContinueButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.cpfTitle).waitForExist();
    await (await this.cpfInput).waitForExist();
    await (await this.whyAskCpfLink).waitForExist();
    await (await this.cpfContinueButton).waitForExist();
  }

  public async setCpfInputText(cpf: string): Promise<void> {
    const input = await this.cpfInput;
    await input.setValue(cpf);
  }

  public async continue(): Promise<void> {
    const button = await this.cpfContinueButton;
    await button.click();
  }
  
}

export default new CpfPage();