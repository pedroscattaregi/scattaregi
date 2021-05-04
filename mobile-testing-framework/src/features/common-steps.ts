import { Given, Then } from 'cucumber';
import welcomePage from '@root/src/pages/login/welcome-page';
import onboardingPage from '@root/src/pages/login/onboarding-page';
import commonElementsPage from '@root/src/pages/common/common-elements-page';
import loginPage from '@root/src/pages/login/login-page';
import pinPage from '@root/src/pages/common/pin-page';
import homePage from '@root/src/pages/common/home-page';
import { appData } from '@root/config/app-data';
import { environment } from '@root/config/environment';
import successModalPage from '@root/src/pages/common/success-modal-page';
import { consts } from '@root/config/consts';

Given('I land on banQi app welcome screen', async function () {
  await onboardingPage.checkRequiredPageElements();
  await onboardingPage.jumpOnboardingScreens();
  await welcomePage.checkRequiredPageElements();
});

Given('I am logged in', { timeout: environment.CUCUMBER_STEP_TIMEOUT * consts.timeoutMultiplier }, async function () {
  await onboardingPage.checkRequiredPageElements();
  await onboardingPage.jumpOnboardingScreens();
  await welcomePage.checkRequiredPageElements();
  await welcomePage.goToLoginPage();
  await loginPage.checkRequiredPageElements();
  await loginPage.performLogin(appData.loginUser.cpf, appData.loginUser.password);
  await pinPage.checkRequiredPageElements();
  await pinPage.sendPin(appData.loginUser.pin);
  await homePage.checkRequiredPageElements();
});

Then('I should get a red error message like {string}', async function (errorMessage) {
  const errorMessageElement = await commonElementsPage.getRedErrorMessage();
  expect(errorMessageElement).toEqual(errorMessage);
});

Then('I should receive a success message with title {string} and description like {string}', async function (title, description) {
  await successModalPage.checkRequiredPageElements();
  const titleElement = await successModalPage.getSuccessModalTitleText();
  expect(titleElement).toEqual(title);
  const descriptionElement = await successModalPage.getSuccessModalDescriptionText();
  expect(descriptionElement).toEqual(description);
  await successModalPage.closeModal();
});