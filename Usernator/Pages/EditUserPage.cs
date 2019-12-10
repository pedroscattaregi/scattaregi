using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Chrome; // to use Actions class
using Usernator.Base;
using System.Collections.Generic;

namespace Usernator.Pages
{
    public class EditUserPage : Program // class inheritance
    {
        private static IWebDriver _driver;

        public EditUserPage(ChromeDriver driver){
            _driver = driver;
        }
        
        public void EditUser(MibUser mibUser){
            _driver.Navigate().GoToUrl(Config.Instance().MibAuthorizationUrl + "//Admin/Users/edit?username=" + mibUser.Username);

            var leftAnchorMenuGroups = _driver.FindElement(By.XPath("//*[@id='mib-anchor-menu']//a[@href='#collection-list-groups' and @data-target-element='collection-list-groups']//span"));
            var leftAnchorMenuSourcePermissions = _driver.FindElement(By.XPath("//*[@id='mib-anchor-menu']//a[@href='#sources-permission-MIB_API' and @data-target-element='sources-permission-MIB_API']//span"));

            ClickElement(leftAnchorMenuGroups);
            ConfigureUserPermissionsByGroup(mibUser);
            
            ClickElement(leftAnchorMenuSourcePermissions);
            ConfigureUserPermissionsBySources();
        }

        #region assistMethods
        private void ConfigureUserPermissionsByGroup(MibUser mibUser)
        {
            var addExistingGroupsButton = "//*[@id='mib-groups-permissions-trigger']";
            var groupsSaveButton = _driver.FindElement(By.XPath("//*[@id='collection-list-groups']//button[@data-original-title='Save']"));
            var closeSuccessSaveMessageButtonXpath = "//*[@class='close']";
            var nameFieldXpath = "//div[@class='btn-group bootstrap-select open']//*[@class='text' and text()='Name']";
            var equalOperationXpath = "//div[@class='btn-group bootstrap-select open']//div[@class='dropdown-menu open']//li[@data-original-index='1']";
            var groupCheckbox = "//*[@id='mib-grid-multiple']//input[@data-name='" + mibUser.GroupName + "']";

            AddExistingFunctionMethod(addExistingGroupsButton, nameFieldXpath, equalOperationXpath, mibUser.GroupName, groupCheckbox);
            AddExistingFunctionMethod(addExistingGroupsButton, nameFieldXpath, equalOperationXpath, "Basic", "//*[@id='mib-grid-multiple']//input[@data-name='Basic']");

            ClickElement(groupsSaveButton);
            WaitAndClickElement(closeSuccessSaveMessageButtonXpath, secondsTimeOut : 1, retries : 10);
        }

        private void AddExistingFunctionMethod(string addExistingButtonXpath, string fieldNameXpath, string OperatatorXpath, string searchValue, string itemToBeSelectedXpath)
        {
            var addExistingSaveButton = "//*[@id='edit-list-multiple']//button[@data-bind-type='addRelated']";
            
            WaitAndClickElement(addExistingButtonXpath);
            System.Threading.Thread.Sleep(1000);
            AsideListSearch(fieldNameXpath, OperatatorXpath, searchValue);
            WaitAndClickElement(itemToBeSelectedXpath);
            WaitAndClickElement(addExistingSaveButton);
        }

        private void AsideListSearch(string field, string operation, string value)
        {
            var fieldComboBox = "//*[@id='edit-list-multiple']//button[@title='ID']";
            var operationComboBox = "//*[@id='edit-list-multiple']//button[@title='Like']";
            var searchField = "//*[@id='select-relation-text-search']";
            
            WaitAndClickElement(fieldComboBox, secondsTimeOut : 1);
            System.Threading.Thread.Sleep(500);
            WaitAndClickElement(field, secondsTimeOut : 1);
            
            WaitAndClickElement(operationComboBox, secondsTimeOut : 1);
            System.Threading.Thread.Sleep(500);
            WaitAndClickElement(operation, secondsTimeOut : 1);

            var valueField = WaitforVisibleElement(searchField);
            valueField.SendKeys(value);
            
            var asideSearchButton = _driver.FindElement(By.XPath("//*[@id='basic-search-trigger-multiple']"));
            asideSearchButton.Click();
        }
        private void ConfigureUserPermissionsBySources()
        {
            var listOfPermissions = _driver.FindElements(By.XPath("//*[@id='sources-permission-MIB_API']//*[@data-level=0]//*[@data-permission-order=1 or @data-permission-order=2 or @data-permission-order=3]"));
            var sourcePermissionsSaveButton = _driver.FindElement(By.XPath("//*[@id='save-source-MIB_API']"));

            foreach(var checkbox in listOfPermissions)
            {
                ClickElement(checkbox);
            }
            ClickElement(sourcePermissionsSaveButton);
        }
        #endregion
    }
}