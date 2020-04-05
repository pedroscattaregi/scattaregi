using NUnit.Framework;
using Selenium.Utils;
using NetCoreSeleniumTest.Pages;

namespace NetCoreSeleniumTest.Test
{
    public class PersonalTest:BaseTest
    {
        [SetUp]
        public void Setup()
        {
            _driver.GoToUrl(baseUrl);
        }

        [Test]
        public void Test()
        {
            //Should login, go to Mis Contenidos and check biblioteca block is visible.

            var homePage = new HomePage(_driver);

            homePage.Ingresar();

            var loginPage = new LoginPage(_driver);
            loginPage.Login(currentUser);

            homePage.GoToBiblioteca();

            var misContenidosPage = new MisContenidosPage(_driver);
            Assert.AreEqual("Mi biblioteca", misContenidosPage.GeTtitleContainerText());
        }

        [TearDown]
        public void TearDown()
        {
            _driver.Quit();
        }
    }
}
