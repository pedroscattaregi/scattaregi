using OpenQA.Selenium;
using Selenium.Utils;
namespace NetCoreSeleniumTest.Pages
{
    public class BasePage
    {
        protected IWebDriver _driver;

        private int secondsTimeout = 120;

        public BasePage(IWebDriver driver)
        {
            _driver = driver;
        }

       public IWebElement GetElement(By elementLocator)
       {
            var element =_driver.GetElement(elementLocator, secondsTimeout);
            _driver.WaitCondition(() => element.Displayed, secondsTimeout);
            _driver.WaitCondition(() => element.Enabled, secondsTimeout);
            return element;
        }
    }
}
