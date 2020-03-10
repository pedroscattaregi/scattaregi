const driverFactory = require('../base/driver-factory');
const config = require('../config/config');
const HomePage = require('../pages/home-page');
const LoginPage = require('../pages/login-page');
const expect = require('chai').expect;

describe('Login', function() {
  this.timeout('300s');
  const driver = driverFactory.build(); 
  const homePage = new HomePage(driver);  
  const loginPage = new LoginPage(driver);  
 
  before(async function(){ 
    await driver.get(config.baseURL);
    await driver.sleep(2000); // ¯\_(ツ)_/¯
  });

  after(async function(){
    await driver.quit();
  });

  afterEach(async function(){
    if (await homePage.isLogged()) {
      await homePage.logOff();
    }
  });

  it('should login', async function() {    
    await homePage.clickLogin();
    await loginPage.login(config.users.qaTest);
    const userButtonText = await homePage.getUserButtonText();
    expect(userButtonText).to.contain('OLÁ, QA!');
  }); 

  it('should logoff', async function() {    
    // login:
    await homePage.clickLogin();
    await loginPage.login(config.users.qaTest);
    const userButtonText = await homePage.getUserButtonText();
    expect(userButtonText).to.contain('OLÁ, QA!');
    // logoff: 
    await homePage.logOff();
    const isLoginButtonVisible = await homePage.isLoginButtonVisible();
    expect(isLoginButtonVisible).to.be.true;
  });   

});