require 'capybara/cucumber'
require 'selenium-webdriver'

Capybara.configure do |config|
    config.default_driver = :selenium_chrome #setando o driver a ser utilizado
    # Opções: selenium (firefox), selenium_chrome, selenium_chrome_healess
    config.app_host = 'https://automacaocombatista.herokuapp.com/' #url base
    config.default_max_wait_time = 5 #timeout de espera pelo elemento na tela em segundos
end
