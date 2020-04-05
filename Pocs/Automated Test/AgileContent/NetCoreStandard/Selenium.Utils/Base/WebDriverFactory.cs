using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using System;
using System.Drawing;
using System.IO;
using System.Text;

namespace Selenium.Utils.Base
{
    public class WebDriverFactory
    {
        public static IWebDriver CreateDriverInstance(Browsers browser, Size size , bool isHeadless)
        {
            IWebDriver driver = null;

            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,"Browsers");

            switch (browser)
            {
                case Browsers.Chrome:
                    driver = ChromeDriverInstance(path, size, isHeadless);
                    break;

                case Browsers.Firefox:
                    driver = FirefoxDriverInstance(path, size, isHeadless);
                    break;

                default:
                    throw new WebDriverException($"Driver named ({browser}) is not supported");
            }

            return driver;
        }

        private static ChromeDriver ChromeDriverInstance(string path, Size size, bool isHeadless)
        {
            var chromeOptions = new ChromeOptions();

            if(size != null && size.IsEmpty == false)
            {
                chromeOptions.AddArgument($"--window-size={size.Width},{size.Height}");
            }

            if(isHeadless)
            {
                chromeOptions.AddArgument("--headless");
            }

            return new ChromeDriver(path, chromeOptions);
        }


        private static FirefoxDriver FirefoxDriverInstance(string path, Size size, bool isHeadless)
        {
            var firefoxOptions = new FirefoxOptions();
            //firefoxOptions.AddArgument($"--window-size={size.Width},{size.Height}");
            if (size != null && size.IsEmpty == false)
            {
                firefoxOptions.AddArgument($"--width={size.Width}");
                firefoxOptions.AddArgument($"--height={size.Height}");
            }

            if (isHeadless)
            {
                firefoxOptions.AddArgument("--headless");
            }

            FirefoxProfile profile = new FirefoxProfile();
            profile.AcceptUntrustedCertificates = true;
            FirefoxOptions options = new FirefoxOptions();
            firefoxOptions.AcceptInsecureCertificates = true;
            firefoxOptions.Profile = profile;

            // Allow Encoding 437 required for ZipStorer in FirefoxDriver  
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            return new FirefoxDriver(path, firefoxOptions);
        }
    }
}
