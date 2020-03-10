using OpenQA.Selenium;
using System.IO;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Drawing;
using Selenium.Utils;
using Selenium.Utils.Base;
using NetCoreSeleniumTest.Model;

namespace NetCoreSeleniumTest.Test
{
    public class BaseTest
    {
        protected IWebDriver _driver;
        private IConfiguration _configuration;
        protected string baseUrl;
        protected User currentUser;

        public BaseTest()
        { 
            var builder = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile(@"Config\config.json");

            _configuration = builder.Build();

            baseUrl = _configuration.GetSection("Selenium:baseURL").Value;

            GetUser();

            BuildDriver();
        }

        public void GetUser()
        {
            var userConfig = _configuration.GetSection("Selenium:credentials");

            currentUser = new User();

            currentUser.Username = userConfig.GetSection("username").Value;

            currentUser.Password = userConfig.GetSection("password").Value;
        }

        public void BuildDriver()
        {
            string browserConfig = _configuration.GetSection("Selenium:browser").Value;

            Browsers browser = Enum.GetValues(typeof(Browsers)).Cast<Browsers>().ToList()
                .Where(b=>b.ToString().ToUpper()== browserConfig.ToUpper()).First();

            var sizeConfig = _configuration.GetSection("Selenium:screen");

            var size = new Size(int.Parse(sizeConfig.GetSection("width").Value), 
                                int.Parse(sizeConfig.GetSection("height").Value));

            bool isHeadless = bool.Parse(_configuration.GetSection("Selenium:headless").Value);

            _driver = WebDriverFactory.CreateDriverInstance(browser, size, isHeadless);
        }
    }
}
