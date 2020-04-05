const driverFactory = require('../base/driver-factory');
const config = require('../config/config');
const HomePage = require('../pages/home-page');
const LoginPage = require('../pages/login-page');
const MisContenidosPage = require('../pages/mis-contenidos-page');
const assert = require('assert');

describe('Personal-QA', function() {
  this.timeout('300s');

  const driver = driverFactory.build(); 
 
  before(async function(){ 
    await driver.get(config.baseURL);
    await driver.sleep(2000); // ¯\_(ツ)_/¯
  });

  after(async function(){
    await driver.quit();
  });

  it('should login, go to Mis Contenidos and check biblioteca block is visible.', async function() {
    
    const homePage = new HomePage(driver);
    await homePage.ingresar();

    const loginPage = new LoginPage(driver);
    await loginPage.login(config.credentials);

    await homePage.goToMiBiblioteca();

    const misContenidosPage = new MisContenidosPage(driver);
    assert.equal(await misContenidosPage.geTtitleContainerText(), 'Mi biblioteca');    
  }); 
});