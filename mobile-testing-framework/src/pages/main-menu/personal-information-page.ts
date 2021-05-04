import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class PersonalInformationPage extends BasePage {

  //Header
  private readonly usernameHeaderInformationLabelElement = "user-name-label";
  private readonly userDobHeaderInformationLabelElement = "user-dob-label";
  private readonly userCpfHeaderInformationLabelElement = "user-cpf-label";
  //Phone Number
  private readonly phoneNumberLabelElement = "user-info-Telefone-label";
  private readonly phoneNumberValueTextElement = "user-info-phone-number-value";
  private readonly editPhoneNumberButtonElement = "EditPhoneNumber-action-button";
  //Email
  private readonly emailLabelElement = "user-info-Email-label";
  private readonly emailValueTextElement = "user-info-email-value";
  private readonly verifyEmailButtonElement = "EditEmailVerification-action-button";
  //Address
  private readonly userAddressLabelElement = "user-info-Endereço-label";
  private readonly userAddressInfoElement = "user-address-information-text";
  private readonly userAddressNeighborhoodTextElement = "user-neighborhood-information-text";
  private readonly userAddressCityStateTextElement = "user-city-state-information-text";
  private readonly userAddressCountryTextElement = "user-country-information-text";
  private readonly userAddressZipCodeTextElement = "user-postal-code-information-text";
  private readonly userAddressEditButtonElement = "Profile address edit-action-button";

  private get usernameHeaderInformationLabel(): Promise<DriverElement> {
    return webdriver.getElement(this.usernameHeaderInformationLabelElement);
  }

  private get userDobHeaderInformationLabel(): Promise<DriverElement> {
    return webdriver.getElement(this.userDobHeaderInformationLabelElement);
  }

  private get userCpfHeaderInformationLabel(): Promise<DriverElement> {
    return webdriver.getElement(this.userCpfHeaderInformationLabelElement);
  }

  private get phoneNumberLabel(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.phoneNumberLabelElement);
  }

  public get phoneNumberValueText(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.phoneNumberValueTextElement);
  }

  private get editPhoneNumberButton(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.editPhoneNumberButtonElement);
  }

  private get emailLabel(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.emailLabelElement);
  }

  private get emailValueText(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.emailValueTextElement);
  }

  private get verifyEmailButton(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.verifyEmailButtonElement);
  }

  private get userAddressLabel(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressLabelElement);
  }

  public get userAddressInfo(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressInfoElement);
  }

  public get userAddressNeighborhoodText(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressNeighborhoodTextElement);
  }

  public get userAddressCityStateText(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressCityStateTextElement);
  }

  public get userAddressCountryText(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressCountryTextElement);
  }

  public get userAddressZipCodeText(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressZipCodeTextElement);
  }

  private get userAddressEditButton(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.userAddressEditButtonElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.usernameHeaderInformationLabel).waitForExist();
    await (await this.userDobHeaderInformationLabel).waitForExist();
    await (await this.userCpfHeaderInformationLabel).waitForExist();
  }

  public async checkAllPageElements(): Promise<void> {
    await (await this.usernameHeaderInformationLabel).waitForExist();
    await (await this.userDobHeaderInformationLabel).waitForExist();
    await (await this.userCpfHeaderInformationLabel).waitForExist();
    await (await this.phoneNumberLabel).waitForExist();
    await (await this.phoneNumberValueText).waitForExist();
    await (await this.editPhoneNumberButton).waitForExist();
    await (await this.emailLabel).waitForExist();
    await (await this.emailValueText).waitForExist();
    await (await this.verifyEmailButton).waitForExist();
    await (await this.userAddressLabel).waitForExist();
    await (await this.userAddressInfo).waitForExist();
    await (await this.userAddressNeighborhoodText).waitForExist();
    await (await this.userAddressCityStateText).waitForExist();
    await (await this.userAddressCountryText).waitForExist();
    await (await this.userAddressZipCodeText).waitForExist();
    await (await this.userAddressEditButton).waitForExist();
  }

  public async editAddress(): Promise<void> {
    const button = await this.userAddressEditButton;
    await button.click();
  }

  public async editPhoneNumber(): Promise<void> {
    const button = await this.editPhoneNumberButton;
    await button.click();
  }

}
// noinspection JSUnusedGlobalSymbols
export default new PersonalInformationPage();