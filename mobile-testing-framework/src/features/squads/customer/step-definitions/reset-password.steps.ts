import { When } from 'cucumber';
import loginPage from '@root/src/pages/login/login-page';
import forgotPasswordPage from '@root/src/pages/reset-password/forgot-password-page';
import { appData } from '@root/config/app-data';

When('I ask to to reset password because I forgot', async function () {
  await loginPage.clickForgotPasswordButton();
  await forgotPasswordPage.checkRequiredPageElements();
  await forgotPasswordPage.sendAccountEmail(appData.loginUser.email);
});
