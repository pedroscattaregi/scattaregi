using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using OpenQA.Selenium.Remote;
using Usernator.Base;

namespace Usernator.Pages
{
    public class BasePage : Program // class inheritance
    {
        private readonly RemoteWebDriver _driver;

        public BasePage(RemoteWebDriver driver){
            _driver = driver;
        }

        public void DoLogin(MibUser mibUser)
        {
            _driver.Navigate().GoToUrl(Config.Instance().MibUrl);

            var usernameInput = _driver.FindElementById("username");
            var passwordInput = _driver.FindElementById("password");
            var submitButton = _driver.FindElementByCssSelector("button.submit");

            usernameInput.SendKeys(mibUser.Username);
            passwordInput.SendKeys(mibUser.Password);
            submitButton.Click();
        }

        public void DoLogout()
        {
            var profileDropDownMenu = "//a[@data-toggle='dropdown']//i[@class='mib-icon-expand']";
            var logoutButton = "//a[@id='user-logout']";

            WaitAndClickElement(profileDropDownMenu);
            System.Threading.Thread.Sleep(500);
            WaitAndClickElement(logoutButton);
        }
        
        public bool IsLoged()
        {
            throw new NotImplementedException();
        }

        public List<MibUser> GetUsersFromCsv ()
        {
            var filePath = Directory.GetCurrentDirectory();
            filePath =  filePath + @"\Base\MibUsers.csv";
            StreamReader csvreader = new StreamReader(filePath, Encoding.Default, true);
            string line = "";
            var users = new List<MibUser>();

            while ((line = csvreader.ReadLine()) != null)
            {
                var csvUser = line.Split(';');
                var user = new MibUser()
                {
                    Username = csvUser[0],
                    Password = csvUser[1],
                    GroupName = csvUser[2],
                    Email = csvUser[3],
                    Company = csvUser[4]
                };
                users.Add(user);                  
            }
            return users;
        }
    }
}