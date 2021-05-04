import { When, Then } from 'cucumber';
import homePage from '@root/src/pages/common/home-page';
import mainMenuPage from '@root/src/pages/main-menu/main-menu-page';
import personalInformationPage from '@root/src/pages/main-menu/personal-information-page';
import { addresses } from '@root/src/utils/customer-generator/addresses';
import addressPage from '@root/src/pages/registration/address-page';
import casual from 'casual';
import { consts } from '@root/config/consts';

const addressIndex = casual.integer(consts.initialArrayIndex, addresses.length + consts.lastIndexOffset);
const newAddress = addresses[addressIndex];
const newAddressNumber = casual.building_number;

When('I edit my address through the main menu', async function () {
  await homePage.openMenu();
  await mainMenuPage.checkRequiredPageElements();
  await mainMenuPage.goToPersonalInformation();
  await personalInformationPage.checkRequiredPageElements();
  await personalInformationPage.editAddress();
  await addressPage.setZipcodeInputText(newAddress.zipCode);
  await addressPage.setNumberInputText(newAddressNumber);
  await addressPage.continue();

});

Then('I should have my address updated in personal information', async function () {
  const address = await (await personalInformationPage.userAddressInfo).getText();
  expect(address).toEqual(`${newAddress.street}, ${newAddressNumber}`);
  const Neighborhood = await (await personalInformationPage.userAddressNeighborhoodText).getText();
  expect(Neighborhood).toEqual(newAddress.neighborhood);
  const cityState = await (await personalInformationPage.userAddressCityStateText).getText();
  expect(cityState).toEqual(`${newAddress.city} - ${newAddress.state}`);
  const country = await (await personalInformationPage.userAddressCountryText).getText();
  expect(country).toEqual(newAddress.country);
  const userAddressZipCodeText = await (await personalInformationPage.userAddressZipCodeText).getText();
  expect(userAddressZipCodeText).toEqual(newAddress.zipCode);
});



