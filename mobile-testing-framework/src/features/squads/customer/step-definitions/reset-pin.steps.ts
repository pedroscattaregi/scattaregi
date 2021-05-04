import { When, Then, Given } from 'cucumber';
import homePage from '@root/src/pages/common/home-page';
import mainMenuPage from '@root/src/pages/main-menu/main-menu-page';
import accountSettingsPage from '@root/src/pages/main-menu/account-settings-page';
import pinPage from '@root/src/pages/common/pin-page';
import { appData } from '@root/config/app-data';
import changePinPage from '@root/src/pages/reset-pin/change-pin-page';
import confirmPasswordPage from '@root/src/pages/reset-pin/confirm-password-page';
import successResetPinPage from '@root/src/pages/reset-pin/success-reset-pin-page';
import { environment } from '@root/config/environment';
import onboardingPage from '@root/src/pages/login/onboarding-page';
import welcomePage from '@root/src/pages/login/welcome-page';
import loginPage from '@root/src/pages/login/login-page';
import { consts } from '@root/config/consts';


Given('I am logged in with a user to change pin', { timeout: environment.CUCUMBER_STEP_TIMEOUT * consts.timeoutMultiplier }, async function () {
  await onboardingPage.checkRequiredPageElements();
  await onboardingPage.jumpOnboardingScreens();
  await welcomePage.checkRequiredPageElements();
  await welcomePage.goToLoginPage();
  await loginPage.checkRequiredPageElements();
  await loginPage.performLogin(appData.changePinUser.cpf, appData.changePinUser.password);
  await pinPage.checkRequiredPageElements();
  await pinPage.sendPin(appData.changePinUser.pin);
  await homePage.checkRequiredPageElements();
});

When('I send my cpf and password to change pin', async function () {
  await loginPage.performLogin(appData.changePinUser.cpf, appData.changePinUser.password);
});

When('I reset my Pin value through the main menu', async function () {
  await homePage.openMenu();
  await mainMenuPage.checkRequiredPageElements();
  await mainMenuPage.goToAccountSettings();
  await accountSettingsPage.checkRequiredPageElements();
  await accountSettingsPage.chooseResetPinOption();
  await pinPage.waitOldPinScreen();
  await pinPage.sendPin(appData.changePinUser.pin);
  await pinPage.waitNewPinScreen();
  await pinPage.sendPin(consts.newPinValue);
  await pinPage.waitConfirmNewPinScreen();
  await pinPage.sendPin(consts.newPinValue);
});

When('I send wrong Pin value {int} times', async function (wrongPinTries) {
  for(let i =0; i < wrongPinTries; i++) {
    await pinPage.checkRequiredPageElements();
    await pinPage.sendPin(consts.wrongPinValue);
  }
});

When('I reset my Pin value', async function () {
  await changePinPage.checkRequiredPageElements();
  await changePinPage.startPinChange();
  await confirmPasswordPage.checkRequiredPageElements(); 
  await confirmPasswordPage.setPasswordInputText(appData.changePinUser.password);
  await confirmPasswordPage.clickConfirmButton();
  await pinPage.waitNewPinScreen();
  await pinPage.sendPin(consts.newPinValue);
  await pinPage.waitConfirmNewPinScreen();
  await pinPage.sendPin(consts.newPinValue);
});

Then('I should receive a success reset Pin message with title {string} and description like {string}', async function (title, description) {
  await successResetPinPage.checkRequiredPageElements();
  const titleElement = await successResetPinPage.getTitleText();
  expect(titleElement).toEqual(title);
  const descriptionElement = await successResetPinPage.getDescriptionText();
  expect(descriptionElement).toEqual(description);
  await successResetPinPage.accessAccount();
});



