import { webdriver } from '@root/src/utils/webdriver/webdriver';
import { BasePage } from '@root/src/pages/common/base-page';
import { DriverElement } from '@root/src/utils/webdriver/driver-element';

class MainMenuPage extends BasePage {

  //private readonly firstNameLabelElement = "first-name-label";
  private readonly personalInformationOptionElement = "personal-information-option";
  private readonly accountSettingsOptionElement = "account-settings-option";
  private readonly rewardsAndGamesOptionElement = "rewards-and-games-option";
  private readonly referingOptionElement = "refering-option";
  private readonly helpOptionElement = "help-option";
  private readonly privacyPolicyOptionElement = "privacy-policy-option";
  private readonly termsOptionElement = "terms-option";
  private readonly aboutAppOptionElement = "about-app-option";
  private readonly logOutOptionElement = "logout-option";

  private get personalInformationOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.personalInformationOptionElement);
  }

  private get accountSettingsOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.accountSettingsOptionElement);
  }

  private get rewardsAndGamesOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.rewardsAndGamesOptionElement);
  }

  private get referingOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.referingOptionElement);
  }

  private get helpOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.helpOptionElement);
  }

  private get privacyPolicyOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.privacyPolicyOptionElement);
  }

  private get termsOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.termsOptionElement);
  }

  private get aboutAppOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.aboutAppOptionElement);
  }

  private get logOutOption(): Promise<DriverElement> {
    return webdriver.getElementInVerticalScrollView(this.logOutOptionElement);
  }

  public async checkRequiredPageElements(): Promise<void> {
    await (await this.personalInformationOption).waitForExist();
    await (await this.accountSettingsOption).waitForExist();
  }

  public async goToPersonalInformation(): Promise<void> {
    const option = await this.personalInformationOption;
    await option.click();
  }

  public async goToAccountSettings(): Promise<void> {
    const option = await this.accountSettingsOption;
    await option.click();
  }

  public async goTorewardsAndGames(): Promise<void> {
    const option = await this.rewardsAndGamesOption;
    await option.click();
  }

  public async goTorefering(): Promise<void> {
    const option = await this.referingOption;
    await option.click();
  }

  public async goToHelp(): Promise<void> {
    const option = await this.helpOption;
    await option.click();
  }

  public async goToPrivacyPolicy(): Promise<void> {
    const option = await this.privacyPolicyOption;
    await option.click();
  }

  public async goToterms(): Promise<void> {
    const option = await this.termsOption;
    await option.click();
  }

  public async goToAboutApp(): Promise<void> {
    const option = await this.aboutAppOption;
    await option.click();
  }

  public async startLogout(): Promise<void> {
    const option = await this.logOutOption;
    await option.click();
  }

}
// noinspection JSUnusedGlobalSymbols
export default new MainMenuPage();