import { Given, When, Then } from 'cucumber';
import homePage from '@root/src/pages/common/home-page';
import p2pTransferOptionsPage from '@root/src/pages/p2p-banqi-transfer/p2p-transfer-options-page';
import p2pTransferReceiverPage from '@root/src/pages/p2p-banqi-transfer/p2p-transfer-receiver-page';
import p2pTransferAmountPage from '@root/src/pages/p2p-banqi-transfer/p2p-transfer-amount-page';
import p2pTransferReviewPage from '@root/src/pages/p2p-banqi-transfer/p2p-transfer-review-page';
import successModalPage from '@root/src/pages/common/success-modal-page';
import { formatMoneyToNumber, formatNumberBrlMoney } from '@root/src/utils/helpers/number-helper';
import { appData } from '@root/config/app-data';

let balance: number;

Given('I have balance greater than {string}', async function (Amount) {
  balance = formatMoneyToNumber(await homePage.getBalanceAmount());
  expect(balance).toBeGreaterThan(formatMoneyToNumber(Amount));
});

When('I go to the P2P banQi transfer section', async function () {
  await homePage.accessTransferSection();
  await p2pTransferOptionsPage.checkRequiredPageElements();
  await p2pTransferOptionsPage.goToBanqiTransfer();
});

When('I send {string} to a valid banQi account', async function (amount) {
  await p2pTransferReceiverPage.checkRequiredPageElements();
  await p2pTransferReceiverPage.setReceiverPhoneNumberInput(appData.p2pTransferReceiver.phoneNumber);
  await p2pTransferReceiverPage.continue();
  await p2pTransferAmountPage.checkRequiredPageElements();
  await p2pTransferAmountPage.setTransferAmountInput(amount);
  await p2pTransferAmountPage.continue();
  await p2pTransferReviewPage.checkRequiredPageElements();
  await p2pTransferReviewPage.confirmTransfer();  
});

Then('I should receive the complete transfer success message', async function () {
  await successModalPage.checkRequiredPageElements();
});

When('I try to send more money than I have in balance to a valid banQi account', async function () {
  const oneReal = 1;
  await p2pTransferReceiverPage.checkRequiredPageElements();
  await p2pTransferReceiverPage.setReceiverPhoneNumberInput(appData.p2pTransferReceiver.phoneNumber);
  await p2pTransferReceiverPage.continue();
  await p2pTransferAmountPage.checkRequiredPageElements();
  await p2pTransferAmountPage.setTransferAmountInput(formatNumberBrlMoney(balance + oneReal));
  await p2pTransferAmountPage.continue();
});