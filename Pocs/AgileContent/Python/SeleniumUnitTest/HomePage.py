from selenium.webdriver.common.by import By

class HomePage:

    def __init__(self, basePage):
        self.basePage = basePage
        self.basePage.driver.get('https://juegos-staging.personal.com.ar/juegos')

    def LogIn(self):
        LogInbutton = self.basePage.GetElement("//*[@id='__next']/header/div/div[4]/button") 
        LogInbutton.click()
        iframe = self.basePage.driver.find_element_by_id("loginIframe")
        self.basePage.driver.switch_to_frame(iframe)

        self.basePage.WaitForElement("idToken1", By.ID)
        userId = self.basePage.driver.find_element_by_id("idToken1")
        password = self.basePage.driver.find_element_by_id("idToken2")
        login_button = self.basePage.driver.find_element_by_id("loginButton_0")

        userId.send_keys("1140370981")
        password.send_keys("1469")
        login_button.click()
        self.basePage.driver.switch_to_default_content()

    def GoToMiBiblioteca(self):
        perfilMenuButtonXpath = "//*[@id='__next']/header/div/div[4]/div/button"
        miContenidosXpath = "//*[@id='dropMenu']/div/div/div/div/ul/nav[1]/div"

        self.basePage.WaitForElement(perfilMenuButtonXpath, By.XPATH)
        self.basePage.driver.find_element_by_xpath(perfilMenuButtonXpath).click()
        self.basePage.driver.find_element_by_xpath(miContenidosXpath).click() 