import { When, Then } from 'cucumber';
import homePage from '@root/src/pages/common/home-page';
import mainMenuPage from '@root/src/pages/main-menu/main-menu-page';
import personalInformationPage from '@root/src/pages/main-menu/personal-information-page';
import editPhoneNumberPage from '@root/src/pages/main-menu/edit-phone-number-page';
import editPhoneNumberOtpCodePage from '@root/src/pages/main-menu/edit-phone-number-otp-code-page';
import casual from 'casual';
import { ddd } from '@root/src/utils/customer-generator/phone-ddd';
import { consts } from '@root/config/consts';

const dddIndex = casual.integer(consts.initialArrayIndex, ddd.length + consts.lastIndexOffset);
const newPhoneNumber = casual.numerify(`(${ddd[dddIndex].code}) 9####-####`);

When('I edit my phone number through the main menu', async function () {
  await homePage.openMenu();
  await mainMenuPage.checkRequiredPageElements();
  await mainMenuPage.goToPersonalInformation();
  await personalInformationPage.checkRequiredPageElements();
  await personalInformationPage.editPhoneNumber();
  await editPhoneNumberPage.checkRequiredPageElements();
  await editPhoneNumberPage.setPhoneNumberInputText(newPhoneNumber);
  await editPhoneNumberPage.continue();
  await editPhoneNumberOtpCodePage.checkRequiredPageElements();
  await editPhoneNumberOtpCodePage.setotpCodeInputText(consts.defaultOtpCode);
  await editPhoneNumberOtpCodePage.continue();
});

Then('My phone number must be updated in personal information', async function () {
  await homePage.openMenu();
  await mainMenuPage.checkRequiredPageElements();
  await mainMenuPage.goToPersonalInformation();
  const phoneNumber = await (await personalInformationPage.phoneNumberValueText).getText();
  expect(phoneNumber).toEqual(`+55 ${newPhoneNumber}`);
});



