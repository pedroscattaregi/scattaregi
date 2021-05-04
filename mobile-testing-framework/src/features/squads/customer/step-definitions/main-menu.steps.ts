import { When, Then } from 'cucumber';
import homePage from '@root/src/pages/common/home-page';
import commonElementsPage from '@root/src/pages/common/common-elements-page';
import mainMenuPage from '@root/src/pages/main-menu/main-menu-page';
import personalInformationPage from '@root/src/pages/main-menu/personal-information-page';
import supportCenterPage from '@root/src/pages/main-menu/support-center-page';
import accountSettingsPage from '@root/src/pages/main-menu/account-settings-page';
import termsAndConditionsPage from '@root/src/pages/registration/terms-and-conditions-page';
import privacyPolicyPage from '@root/src/pages/main-menu/privacy-policy-page';
import aboutAppPage from '@root/src/pages/main-menu/about-app-page';
import logoutPopUpPage from '@root/src/pages/main-menu/logout-pop-up-page';
import { environment } from '@root/config/environment';
import { consts } from '@root/config/consts';

When('I open the hamburguer menu clicking on \'meu banQi\' top left icon', async function () {
  await homePage.openMenu();
  await mainMenuPage.checkRequiredPageElements();
});

Then('I should have all correct options', { timeout: environment.CUCUMBER_STEP_TIMEOUT * consts.timeoutMultiplier }, async function () {
  await mainMenuPage.goToPersonalInformation();
  await personalInformationPage.checkRequiredPageElements();
  await commonElementsPage.goBack();

  await mainMenuPage.goToAccountSettings();
  await accountSettingsPage.checkRequiredPageElements();
  await commonElementsPage.goBack();

  await mainMenuPage.goToHelp();
  await supportCenterPage.checkRequiredPageElements();
  await commonElementsPage.goBack();

  await mainMenuPage.goToPrivacyPolicy();
  await privacyPolicyPage.checkRequiredPageElements();
  await commonElementsPage.goBack();

  await mainMenuPage.goToterms();
  await termsAndConditionsPage.checkRequiredPageElements();
  await commonElementsPage.goBack();

  await mainMenuPage.goToAboutApp();
  await aboutAppPage.checkRequiredPageElements();
  await commonElementsPage.goBack();
  
  await mainMenuPage.startLogout();
  await logoutPopUpPage.checkRequiredPageElements();
  await logoutPopUpPage.cancelLogout();

});