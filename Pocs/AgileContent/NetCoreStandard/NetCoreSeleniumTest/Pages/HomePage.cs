using OpenQA.Selenium;

namespace NetCoreSeleniumTest.Pages
{
    public class HomePage: BasePage
    {
        private By ingresarLocator;
        private By perfilLocator;
        private By miContenidosLocator;

        public HomePage(IWebDriver driver) : base(driver)
        {
            ingresarLocator = By.XPath("//*[@id='__next']/header/div/div[4]/button");
            perfilLocator = By.XPath("//*[@id='__next']/header/div/div[4]/div/button");
            miContenidosLocator = By.XPath("//*[@id='dropMenu']/div/div/div/div/ul/nav[1]/div");
        }

        public void Ingresar()
        {
            GetElement(ingresarLocator).Click();
        }

        public void GoToBiblioteca()
        {
            GetElement(perfilLocator).Click();

            GetElement(miContenidosLocator).Click();
        }
    }
}
