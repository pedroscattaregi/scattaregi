using OpenQA.Selenium;

namespace NetCoreSeleniumTest.Pages
{
    public class MisContenidosPage: BasePage
    {
        public By titleContainer;

        public MisContenidosPage(IWebDriver driver): base(driver)
        {
            titleContainer = By.XPath("//div[contains(@class, 'TitleContainer')]/h2[text()='Mi biblioteca']");
        }

        public string GeTtitleContainerText()
        {
            return GetElement(titleContainer).Text;
        }
    }
}
