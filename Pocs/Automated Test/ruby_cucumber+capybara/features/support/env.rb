#require 'capybara/cucumber'
require 'selenium-webdriver'

#trazendo dependências da gem do Cucumber para o env para tornar global dentro do projeto 
require 'capybara'
require 'capybara/dsl'
require 'capybara/rspec/matchers'

World(Capybara::DSL)
World(Capybara::RSpecMatchers)
#-----------------------------------------------------------------------------------------|

Capybara.configure do |config|
    config.default_driver = :selenium_chrome #setando o driver a ser utilizado
    # Opções: selenium (firefox), selenium_chrome, selenium_chrome_healess
    config.app_host = 'https://automacaocombatista.herokuapp.com/' #url base
    config.default_max_wait_time = 5 #timeout de espera pelo elemento na tela em segundos
end
