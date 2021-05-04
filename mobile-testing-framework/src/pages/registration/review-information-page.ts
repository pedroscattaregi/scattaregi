import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class ReviewInformationPage extends BasePage {
  
  private readonly reviewInfoTitleElement = "information-review-title";
  private readonly reviewPersonalInfoLabelElement = "information-review-personal-data-label";
  private readonly personalInfoNameTextElement = "information-review-personal-data-legal-name-text";
  private readonly personalInfoCpfTextElement = "information-review-personal-data-cpf-text";
  private readonly personalInfoDobTextElement = "information-review-personal-data-dob-text";
  private readonly personalInfoMotherNameTextElement = "information-review-personal-data-mother-name-text";
  private readonly personalInfoEditButtonElement = "information-review-personal-edit-button";
  private readonly reviewAddressLabelElement = "information-review-address-label";
  private readonly personalAddressTextElement = "information-review-address-text";
  //private readonly personalAddressComplementTextElement = "information-review-address-complement-text";
  private readonly personalAddressNeighborhoodTextElement = "information-review-address-neighborhood-text";
  private readonly personalAddressCityStateTextElement = "information-review-address-city-state-text";
  private readonly personalAddressZipcodeTextElement = "information-review-address-postal-code-text";
  private readonly personalAddressEditButtonElement = "information-review-address-edit-button";
  private readonly reviewInformationSubmitButtonElement = "send-information-button";

  private get reviewInfoTitle(): Promise<DriverElement> {
    return webdriver.getElement(this.reviewInfoTitleElement);
  }

  private get reviewPersonalInfoLabel(): Promise<DriverElement> {
    return webdriver.getElement(this.reviewPersonalInfoLabelElement);
  }

  public get personalInfoNameText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalInfoNameTextElement);
  }

  public get personalInfoCpfText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalInfoCpfTextElement);
  }

  public get personalInfoDobText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalInfoDobTextElement);
  }

  public get personalInfoMotherNameText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalInfoMotherNameTextElement);
  }

  private get personalInfoEditButton(): Promise<DriverElement> {
    return webdriver.getElement(this.personalInfoEditButtonElement);
  }

  private get reviewAddressLabel(): Promise<DriverElement> {
    return webdriver.getElement(this.reviewAddressLabelElement);
  }

  public get personalAddressText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalAddressTextElement);
  }

  // public get personalAddressComplementText(): Promise<DriverElement> {
  //   return webdriver.getElement(this.personalAddressComplementTextElement);
  // }

  public get personalAddressNeighborhoodText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalAddressNeighborhoodTextElement);
  }

  public get personalAddressCityStateText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalAddressCityStateTextElement);
  }

  public get personalAddressZipcodeText(): Promise<DriverElement> {
    return webdriver.getElement(this.personalAddressZipcodeTextElement);
  }

  private get personalAddressEditButton(): Promise<DriverElement> {
    return webdriver.getElement(this.personalAddressEditButtonElement);
  }

  private get reviewInformationSubmitButton(): Promise<DriverElement> {
    return webdriver.getElement(this.reviewInformationSubmitButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.reviewInfoTitle).waitForExist();
    await (await this.reviewPersonalInfoLabel).waitForExist();
    await (await this.personalInfoNameText).waitForExist();
    await (await this.personalInfoCpfText).waitForExist();
    await (await this.personalInfoDobText).waitForExist();
    await (await this.personalInfoMotherNameText).waitForExist();
    await (await this.personalInfoEditButton).waitForExist();
    await (await this.reviewAddressLabel).waitForExist();
    await (await this.personalAddressText).waitForExist();
    //await (await this.personalAddressComplementText).waitForExist();
    await (await this.personalAddressNeighborhoodText).waitForExist();
    await (await this.personalAddressCityStateText).waitForExist();
    await (await this.personalAddressZipcodeText).waitForExist();
    await (await this.personalAddressEditButton).waitForExist();
    await (await this.reviewInformationSubmitButton).waitForExist();
  }

  public async submitInformation(): Promise<void> {
    const button = await this.reviewInformationSubmitButton;
    await button.click();
  }
}

export default new ReviewInformationPage();