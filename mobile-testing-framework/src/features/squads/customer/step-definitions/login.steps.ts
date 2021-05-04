import { When, Then } from 'cucumber';
import loginPage from '@root/src/pages/login/login-page';
import pinPage from '@root/src/pages/common/pin-page';
import welcomePage from '@root/src/pages/login/welcome-page';
import homePage from '@root/src/pages/common/home-page';
import { appData } from '@root/config/app-data';
import { Customer } from '@root/src/utils/customer-generator/customer-generator';

const customer = new Customer();

When('I go to the login screen', async function () {
  await welcomePage.goToLoginPage();
  await loginPage.checkRequiredPageElements();
});

When('I send my cpf and password', async function () {
  await loginPage.performLogin(appData.loginUser.cpf, appData.loginUser.password);
});

When('I send my pin value', async function () {
  await pinPage.checkRequiredPageElements();
  await pinPage.sendPin(appData.loginUser.pin);
});

Then('I should be logged in the home screen', async function () {
  await homePage.checkRequiredPageElements();
});

When('I put a invalid cpf value like {string}', async function (invalidCpf) {
  await loginPage.performLogin(invalidCpf, 'qwerty');
});

When('I try to login with wrong password', async function () {
  await loginPage.performLogin(appData.loginUser.cpf, `${appData.loginUser.password}!`);
});

When('I try to login with a not registered cpf', async function () {
  await loginPage.performLogin(customer.cpf, 'password');
});