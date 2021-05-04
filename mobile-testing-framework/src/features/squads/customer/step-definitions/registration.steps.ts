import { When, Then } from 'cucumber';
import welcomePage from '@root/src/pages/login/welcome-page';
import firstNamePage from '@root/src/pages/registration/first-name-page';
import cpfPage from '@root/src/pages/registration/cpf-page';
import emailPage from '@root/src/pages/registration/email-page';
import passwordPage from '@root/src/pages/registration/password-page';
import legalNamePage from '@root/src/pages/registration/legal-name-page';
import dobPage from '@root/src/pages/registration/dob-page';
import motherNamePage from '@root/src/pages/registration/mother-name-page';
import zipCodePage from '@root/src/pages/registration/zip-code-page';
import addressPage from '@root/src/pages/registration/address-page';
import phoneNumberPage from '@root/src/pages/registration/phone-number-page';
import otpCodePage from '@root/src/pages/registration/otp-code-page';
import referralCodePage from '@root/src/pages/registration/referral-code-page';
import pinPage from '@root/src/pages/common/pin-page';
import reviewInformationPage from '@root/src/pages/registration/review-information-page';
import loadingModelPage from '@root/src/pages/common/loading-modal-page';
import successCreateAccountPage from '@root/src/pages/registration/success-create-account-page';
import termsAndConditionsPage from '@root/src/pages/registration/terms-and-conditions-page';
import alreadyCreatedAccountLoginPage from '@root/src/pages/registration/already-created-account-login-page';
import { Customer } from '@root/src/utils/customer-generator/customer-generator';
import { appData } from '@root/config/app-data';
import { consts } from '@root/config/consts';

let customer: Customer;

When('I start the registration flow', async function () {
  await welcomePage.goToRegistrationFlow();
  customer = new Customer();
});

When('I send my first name', async function () {
  await firstNamePage.checkRequiredPageElements();
  await firstNamePage.setFirstNameInputText(customer.firstName);
  await firstNamePage.continue();
});

When('I send my cpf number', async function () {
  await cpfPage.checkRequiredPageElements();
  await cpfPage.setCpfInputText(customer.cpf);
  await cpfPage.continue();
});

When('I send my email and confirm it', async function () {
  await emailPage.checkRequiredPageElements();
  await emailPage.setEmailInputText(customer.email);
  await emailPage.setEmailConfirmationInputText(customer.email);
  await emailPage.continue();
});

When('I send my password and confirm it', async function () {
  await passwordPage.checkRequiredPageElements();
  await passwordPage.setPasswordInputText(customer.password);
  await passwordPage.setPasswordConfirmationInputText(customer.password);
  await passwordPage.continue();
});

When('I send my legal name', async function () {
  await legalNamePage.checkRequiredPageElements();
  await legalNamePage.setLegalNameInputText(customer.legalName);
  await legalNamePage.continue();
});

When('I send my date of birthday', async function () {
  await dobPage.checkRequiredPageElements();
  await dobPage.setDobInputText(customer.dob);
  await dobPage.continue();
});

When(`I send my mother's name`, async function () {
  await motherNamePage.checkRequiredPageElements();
  await motherNamePage.setMotherNameInputText(customer.motherName);
  await motherNamePage.continue();
});

When('I send my zip code', async function () {
  await zipCodePage.checkRequiredPageElements();
  await zipCodePage.setZipCodeInputText(customer.zipCode);
  await zipCodePage.continue();
});

When('I confirm my address information', async function () {
  await addressPage.checkRequiredPageElements();
  await addressPage.setNumberInputText(customer.addressNumber);
  await addressPage.continue();
});

When('I send my phone number', async function () {
  await phoneNumberPage.checkRequiredPageElements();
  await phoneNumberPage.setPhoneNumberInputText(customer.phoneNumber);
  await phoneNumberPage.continue();
});

When('I send the OTP code confirming my phone number', async function () {
  await otpCodePage.checkRequiredPageElements();
  await otpCodePage.setotpCodeInputText(consts.defaultOtpCode);
  await otpCodePage.continue();
});

When('I continue registration without setting any referral code', async function () {
  await referralCodePage.checkRequiredPageElements();
  await referralCodePage.continue();
});

When('I set my pin value', async function () {
  await pinPage.checkRequiredPageElements();
  await pinPage.sendPin(customer.pin);
  await pinPage.continue();
});

When('I confirm my pin value', async function () {
  await pinPage.checkRequiredPageElements();
  await pinPage.sendPin(customer.pin);
  await pinPage.continue();
});

When('I review my information', async function () {
  await reviewInformationPage.checkRequiredPageElements();
  const personalInfoNameText = await (await reviewInformationPage.personalInfoNameText).getText();
  expect(personalInfoNameText).toEqual(customer.legalName);
  const personalInfoCpfText = await (await reviewInformationPage.personalInfoCpfText).getText();
  expect(personalInfoCpfText).toEqual(customer.cpf);
  const personalInfoDobText = await (await reviewInformationPage.personalInfoDobText).getText();
  expect(personalInfoDobText).toEqual(customer.dob);
  const personalInfoMotherNameText = await (await reviewInformationPage.personalInfoMotherNameText).getText();
  expect(personalInfoMotherNameText).toEqual(customer.motherName);
  const personalAddressZipcodeText = await (await reviewInformationPage.personalAddressZipcodeText).getText();
  expect(personalAddressZipcodeText).toEqual(customer.zipCode);
  const personalAddressText = await (await reviewInformationPage.personalAddressText).getText();
  expect(personalAddressText).toEqual(`${customer.street}, ${customer.addressNumber}`);
  const personalAddressNeighborhoodText = await (await reviewInformationPage.personalAddressNeighborhoodText).getText();
  expect(personalAddressNeighborhoodText).toEqual(customer.neighborhood);
});

When('I submit my information', async function () {
  await reviewInformationPage.submitInformation();
  await loadingModelPage.checkRequiredPageElements();
});

Then('I must receive the successful created banQi account message', async function () {
  await successCreateAccountPage.checkRequiredPageElements();
  await successCreateAccountPage.goToBanqiAccount();
});

When('I open the Terms and Conditions', async function () {
  await firstNamePage.checkRequiredPageElements();
  await firstNamePage.openTermsAndConditions();
});

Then('I am able to read the Terms and Conditions screen', async function () {
  await termsAndConditionsPage.checkRequiredPageElements();
});

When('I send an invalid CPF value like {string}', async function (invalidCpf) {
  await cpfPage.checkRequiredPageElements();
  await cpfPage.setCpfInputText(invalidCpf);
  await cpfPage.continue();
});

When('I send an already in use CPF', async function () {
  await cpfPage.checkRequiredPageElements();
  await cpfPage.setCpfInputText(appData.loginUser.cpf);
  await cpfPage.continue();
});

Then('I should be redirected to the login flow', async function () {
  await alreadyCreatedAccountLoginPage.checkRequiredPageElements();
});

When('I send my email and a diferent one to confirm it', async function () {
  await emailPage.checkRequiredPageElements();
  await emailPage.setEmailInputText(customer.email);
  await emailPage.setEmailConfirmationInputText(`x${customer.email}`);
  await emailPage.continue();
});

When('I send my password and a different one to confirm it', async function () {
  await passwordPage.checkRequiredPageElements();
  await passwordPage.setPasswordInputText(customer.password);
  await passwordPage.setPasswordConfirmationInputText(`x${customer.password}`);
  await passwordPage.continue();
});

When('I send a under age date of birthday', async function () {
  await dobPage.checkRequiredPageElements();
  await dobPage.setDobInputText('31/07/2004');
  await dobPage.continue();
});

When('I send an invalid zip code like {string}', async function (invalidZipCode) {
  await zipCodePage.checkRequiredPageElements();
  await zipCodePage.setZipCodeInputText(invalidZipCode);
  await zipCodePage.continue();
});

Then('The address form must be empty', async function () {
  const addressInput = await (await addressPage.addressInput).getText();
  expect(addressInput).toEqual('Avenida/Rua/Estrada');
  const addressNeighborhoodInput = await (await addressPage.addressNeighborhoodInput).getText();
  expect(addressNeighborhoodInput).toEqual('Bairro');
  const addressCityInput = await (await addressPage.addressCityInput).getText();
  expect(addressCityInput).toEqual('Cidade');
  const addressStateInput = await (await addressPage.addressStateInput).getText();
  expect(addressStateInput).toEqual('Lista de estados');
});
