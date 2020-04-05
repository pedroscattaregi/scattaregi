from selenium.webdriver.common.by import By

class MiContenidos():

    def __init__(self, driver):
        self.driver = driver

    def GetMiBibliotecaText(self):
        self.driver.WaitForElement("//h2[@class = 'ScrolledListstyles__Title-p5l0a6-4 ciPCMD']", By.XPATH)
        h2 = self.driver.GetElement("//h2[@class = 'ScrolledListstyles__Title-p5l0a6-4 ciPCMD']")
        return h2.text