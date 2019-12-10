using System;
using Usernator.Base;
using Usernator.Pages;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Collections.Generic;

namespace Usernator
{
    public class Program
    {
        private static ChromeDriver driver = new ChromeDriver();
        public static List<MibUser> csvUsers { get; set; }
        static void Main(string[] args)
        {
            var BasePage = new BasePage(driver);
            var CreateUserPage = new CreateUserPage(driver);
            var EditUserPage = new EditUserPage(driver);
            csvUsers = BasePage.GetUsersFromCsv();
            
            driver.Manage().Window.Maximize();
            foreach(var user in csvUsers){
                BasePage.DoLogin(Config.Instance().AdminUser);
                CreateUserPage.CreateUser(user);
                EditUserPage.EditUser(user);
                BasePage.DoLogout();
                BasePage.DoLogin(user);
                WaitAndClickElement("//button[@class='allowAlwaysButton btn btn-success' and @data-original-title='Authorize always']");
                BasePage.DoLogout();
            }
            driver.Close();
        }

        #region AssistMethods
        public static void WaitAndClickElement(string elementXpath, int retries = 5, int secondsTimeOut = 2)
        {
            var foundElement = WaitforVisibleElement(elementXpath, retries, secondsTimeOut);
            ClickElement(foundElement, retries, secondsTimeOut);
        }
        public static IWebElement WaitforVisibleElement(string elementXpath, int retries = 5, int secondsTimeOut = 2)
        {
            IWebElement visibleElement = null;
            var isVisible = false;
            var retry = 0;
            while(!isVisible && retry < retries)
            {
                try
                {
                    visibleElement = driver.FindElement(By.XPath(elementXpath));
                    isVisible = true;

                }catch(Exception){
                    System.Threading.Thread.Sleep( (int) TimeSpan.FromSeconds(secondsTimeOut).TotalMilliseconds);
                    retry += 1;
                } 
            }
            if (retry == retries){ 
                throw new Exception("It was not possible to find the element.");
            }
            return visibleElement;
        }

        public static void ClickElement(IWebElement Element, int retries = 5, int secondsTimeOut = 2)
        {
            var clicked = false;
            var retry = 0;
            while(!clicked && retry < retries)
            {
                try
                {
                    Element.Click();
                    clicked = true;
                }catch(Exception){
                    System.Threading.Thread.Sleep( (int) TimeSpan.FromSeconds(secondsTimeOut).TotalMilliseconds);  
                    retry += 1;
                }
            }
            if (retry == retries){ 
                throw new Exception("It was not possible to click in element '"+ Element.Text + "'.");
            }
        }
        #endregion
    }

}