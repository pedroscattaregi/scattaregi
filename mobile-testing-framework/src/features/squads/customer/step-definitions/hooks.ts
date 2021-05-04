import { After } from "cucumber";
import accountSettingsPage from "@root/src/pages/main-menu/account-settings-page";
import pinPage from "@root/src/pages/common/pin-page";
import { appData } from "@root/config/app-data";
import successModalPage from "@root/src/pages/common/success-modal-page";
import homePage from "@root/src/pages/common/home-page";
import mainMenuPage from "@root/src/pages/main-menu/main-menu-page";
import { consts } from "@root/config/consts";

const oneMinute = 60000;

After({timeout: oneMinute, tags: '@reset-pin-main-menu'}, async () => {
    
  await accountSettingsPage.chooseResetPinOption();
  await pinPage.waitOldPinScreen();
  await pinPage.sendPin(consts.newPinValue);
  await pinPage.waitNewPinScreen();
  await pinPage.sendPin(appData.changePinUser.pin);
  await pinPage.waitConfirmNewPinScreen();
  await pinPage.sendPin(appData.changePinUser.pin);
  await successModalPage.checkRequiredPageElements();
  await browser.reset();

});

After({timeout: oneMinute, tags: '@reset-pin-login'}, async () => {
  await homePage.openMenu();
  await mainMenuPage.goToAccountSettings();
  await accountSettingsPage.chooseResetPinOption();
  await pinPage.waitOldPinScreen();
  await pinPage.sendPin(consts.newPinValue);
  await pinPage.waitNewPinScreen();
  await pinPage.sendPin(appData.changePinUser.pin);
  await pinPage.waitConfirmNewPinScreen();
  await pinPage.sendPin(appData.changePinUser.pin);
  await successModalPage.checkRequiredPageElements();  
  await browser.reset();
});