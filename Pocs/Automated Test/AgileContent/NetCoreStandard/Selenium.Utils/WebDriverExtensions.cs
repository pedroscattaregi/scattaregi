using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Selenium.Utils
{
    public static class WebDriverExtensions
    {
        /// <summary>
        ///  Go to a passed Url
        /// </summary>
        /// <param name="webDriver"></param>
        /// <param name="seconds"> Time to wait pages open</param>
        /// <param name="url">url to go</param>
        public static void GoToUrl(this IWebDriver webDriver,
            string url, int seconds = 60)
        {
            webDriver.Manage().Timeouts().PageLoad = TimeSpan.FromSeconds(seconds);
            webDriver.Navigate().GoToUrl(url);
        }

        /// <summary>
        ///  get a element by html DOM path
        /// </summary>
        /// <param name="webDriver">selenium driver</param>
        /// <param name="elementXpath">element path by (By) object</param>
        /// <param name="seconds">time to wait in seconds </param>
        /// <returns></returns>
        public static IWebElement GetElement(this IWebDriver webDriver, By elementXpath, int seconds = 60)
        {
            webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(seconds);

            return webDriver.FindElement(elementXpath);
        }

        /// <summary>
        ///  Wait a time for a boolean return of a passed method
        /// </summary>
        /// <param name="webDriver">elenium driver</param>
        /// <param name="method">A function that returns a boolean</param>
        /// <param name="seconds">time to wait in seconds</param>
        public static void WaitCondition(this IWebDriver webDriver, Func<bool> method, int seconds = 60)
        {
            try
            {
                new WebDriverWait(webDriver, TimeSpan.FromSeconds(seconds)).Until<bool>((driver) =>
                {
                    return method();
                });
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Error on executing the follow method: '" + method.Method.Name + "'", ex);
            }
        }

        public static object BaseExecuteScript(this IWebDriver webDriver,string script, params object[] args)
        {

            IJavaScriptExecutor js = (IJavaScriptExecutor)webDriver;
            return js.ExecuteScript(script, args);
        }
    }
}
