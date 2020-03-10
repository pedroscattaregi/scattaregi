import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as expectedConditions
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from Browsers import Browser


class Driver():

    def __init__(self, isHeadless = False, browser = Browser.CHROME):
        options = Options()
        options.add_argument('log-level=3')
        
        if isHeadless : options.add_argument("headless")

        if browser == Browser.CHROME :
            self.driver = webdriver.Chrome(options=options)    
        else:
            self.driver = webdriver.Firefox() 
            
        self.driver.set_window_size(1240, 784)

    def GoToURL(self, url):
        self.driver.get(url)

    def GetElement(self, locator):
        return self.driver.find_element_by_xpath(locator)

    def WaitForElement(self, locator, By):
        wait = WebDriverWait(self.driver, 20)
        wait.until(expectedConditions.visibility_of_element_located((By, locator)))