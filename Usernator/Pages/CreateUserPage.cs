using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Chrome; // to use Actions class
using Usernator.Base;
using System.Collections.Generic;

namespace Usernator.Pages
{
    public class CreateUserPage : Program // class inheritance
    {
        private static IWebDriver _driver;

        public CreateUserPage(ChromeDriver driver){
            _driver = driver;
        }
        
        public void CreateUser(MibUser mibUser)
        {
            _driver.Navigate().GoToUrl(Config.Instance().MibAuthorizationUrl + "//Admin/Users/create");
            
            Actions  actions = new Actions(_driver);

            var usernameInput = _driver.FindElement(By.XPath("//*[@id='basciUserInfoForm']//*[@name='username']"));
            var passwordInput = _driver.FindElement(By.XPath("//*[@id='basciUserInfoForm']//*[@name='password']"));
            var confirmPasswordInput = _driver.FindElement(By.XPath("//*[@id='basciUserInfoForm']//*[@name='confirmpassword']"));
            var emailInput = _driver.FindElement(By.XPath("//*[@id='basciUserInfoForm']//*[@name='email']"));
            var companyInput = _driver.FindElement(By.XPath("//*[@id='basciUserInfoForm']//*[@name='company']"));
            var enableInput = "//input[@type='checkbox' and @name='enabled']";
            var createUserButton = _driver.FindElement(By.XPath("//*[@id='createBasicUserButton']"));
            var confirmUserCreationButtonXpath = "//button[@class='swal2-confirm styled']";
            
            // filling fields and saving
            usernameInput.SendKeys(mibUser.Username);
            passwordInput.SendKeys(mibUser.Password);
            confirmPasswordInput.SendKeys(mibUser.Password);
            emailInput.SendKeys(mibUser.Email);
            companyInput.SendKeys(mibUser.Company);
            actions.MoveToElement(_driver.FindElement(By.XPath(enableInput)));
            WaitAndClickElement(enableInput);
            actions.MoveToElement(createUserButton).Click().Perform();
            WaitAndClickElement(confirmUserCreationButtonXpath, secondsTimeOut : 3);
        }
    }
}