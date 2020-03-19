Dir[File.join(File.dirname(__FILE__),'../screens/*_screen.rb')].each { |file| require file }

# Modulos para chamar as classes instanciadas
module Screens

    def base
        @base ||= BaseScreen.new
    end
    
    def mainMenuScreen
        @mainMenuScreen ||= MainMenuScreen.new
    end

end