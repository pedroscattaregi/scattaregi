from driver import Driver
from HomePage import HomePage
from MiContenidos import MiContenidos
from Browsers import Browser
import unittest

class PersonalTests(unittest.TestCase):

    @classmethod
    def tearDownClass(self):
        self.basePage.driver.quit()

    @classmethod
    def setUpClass(self):
        self.basePage = Driver(isHeadless=False, browser= Browser.CHROME)
        self.homePage = HomePage(self.basePage)
        self.miContenidos = MiContenidos(self.basePage)

    def test_mi_biblioteca_block_shown(self):
        self.homePage.LogIn()
        self.homePage.GoToMiBiblioteca()
        self.assertEqual(self.miContenidos.GetMiBibliotecaText(), 'Mi biblioteca')


if __name__ == "__main__":
    suite = unittest.TestLoader().loadTestsFromTestCase(PersonalTests)
    unittest.TextTestRunner(verbosity= 2).run(suite)