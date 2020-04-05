using NetCoreSeleniumTest.Model;
using OpenQA.Selenium;

namespace NetCoreSeleniumTest.Pages
{
    public class LoginPage: BasePage
    {
        private By frameLocator;
        private By numeroDelineaLocator;
        private By clavePersonalLocator;
        private By ingresarLocator;

        public LoginPage(IWebDriver driver) :base(driver) 
        {
            frameLocator = By.Id("loginIframe");
            numeroDelineaLocator = By.Id("idToken1");
            clavePersonalLocator = By.Id("idToken2");
            ingresarLocator = By.Id("loginButton_0");
        }

        public void Login(User user)
        {
            var frame = GetElement(frameLocator);
            _driver.SwitchTo().Frame(frame);

            GetElement(numeroDelineaLocator).SendKeys(user.Username);

            GetElement(clavePersonalLocator).SendKeys(user.Password);

            GetElement(ingresarLocator).Click();

            _driver.SwitchTo().DefaultContent();
        }
    }
}
