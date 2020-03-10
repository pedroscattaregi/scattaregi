using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;

namespace TestLoginFacebook
{
    [TestClass]
    public class FacebookLoginTest
    { 
        private static ChromeDriver driver = new ChromeDriver();

        [TestMethod]
        public void TestMethod1()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https:\\facebook.com");
        }
    }
}
