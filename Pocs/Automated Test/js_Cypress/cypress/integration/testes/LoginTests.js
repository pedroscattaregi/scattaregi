import * as _config from "./../../../config.json";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // for the tested application errors
  return false
})

var homePage = {
  header : "#top > div.top-section.text-ppp"
}

describe('TestRail Login', () => {
  it('Do Login with email correctly', function() {
    
    cy.visit('/')
    performLogin(defaultUserToLogin)

    cy.get(homePage.header).should(($headerTitle) => {
      expect($headerTitle).to.contain("TestRail QA") //take careful about the contain, test with: '.contain("Test"))' => it will pass
    })
  })
})

//USER constructor
class TestRailUser {
  constructor(username, password) {
    this.username = username,
      this.password = password;
  }
}

// LOGIN
var defaultUserToLogin = new TestRailUser(_config.user_information.user_email, _config.user_information.user_password);
var loginPage = {
  username : "#name",
  password : "#password",
  button : "#button_primary > span"
}

function performLogin(userToLogin){
  userToLogin = userToLogin || defaultUser
  cy.get(loginPage.username)
    .type(userToLogin.username)
  cy.get(loginPage.password)
    .type(userToLogin.password)
  cy.get(loginPage.button)
    .click()
}

//LOGOUT
var logoutPage = {
  userDropdown : "#navigation-user", //está dando erro aqui pra logout
  logoutButton : "<a class='dropdown-menu-link' id='navigation-user-logout' href='index.php?/auth/logout'>Logout</a>"
}

function performLogout(){
  cy.get(logoutPage.userDropdown)
    .click()
  cy.get(logoutPage.logoutButton)
    .click()
}