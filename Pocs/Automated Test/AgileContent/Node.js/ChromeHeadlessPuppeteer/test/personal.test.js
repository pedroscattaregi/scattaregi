const MainPage = require("../test/pages/MainPage");
const LoginPage = require("../test/pages/LoginPage");

describe("MiB Tests", function() {
  it("Login and Check Mi Biblioteca Block", async () => {
    const mainPageObject = new MainPage(page);

    await mainPageObject.clickOnIngresar();

    const loginPageObject = new LoginPage(page);

    await loginPageObject.login(process.env.LINE, process.env.PASS);

    await mainPageObject.goToMisContenidos();

    const doesMiBibliotecaBlockExist = await mainPageObject.checkMiBibliotecaBlockExistence();

    expect(doesMiBibliotecaBlockExist).to.be.true;
  });
});
