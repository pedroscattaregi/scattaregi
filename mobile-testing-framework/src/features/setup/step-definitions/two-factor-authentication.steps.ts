import { When } from 'cucumber';
import { consts } from '@root/config/consts';
import unverifiedDevicePage from '@root/src/pages/two-factor-authentication/unverified-device-page';
import twoFactorAuthOptionsPage from '@root/src/pages/two-factor-authentication/two-factor-auth-options-page';
import twoFactorOtpCodePage from '@root/src/pages/two-factor-authentication/two-factor-otp-code-page';
import successTwoFactorAuthenticationPage from '@root/src/pages/two-factor-authentication/success-two-factor-authentication-page';

When('I authenticate my device', async function () {
  await unverifiedDevicePage.checkRequiredPageElements();
  await unverifiedDevicePage.startTwoFactorAuth();
  await twoFactorAuthOptionsPage.checkRequiredPageElements();
  await twoFactorAuthOptionsPage.selectEmailOption();
  await twoFactorAuthOptionsPage.continue();
  await twoFactorOtpCodePage.checkRequiredPageElements();
  await twoFactorOtpCodePage.setOtpCodeInputText(consts.defaultOtpCode);
  await twoFactorOtpCodePage.continue();
  await successTwoFactorAuthenticationPage.checkRequiredPageElements();
  await successTwoFactorAuthenticationPage.accessAccount();
});