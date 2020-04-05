class MainMenuScreen < BaseScreen
    #O método abaixo eu criei uma hash com várias variáveis recebendo o elemento mapeado da tela.
    
    
      def elementos_do_menu
        {
            menuHeader: '//android.widget.ImageButton[@content-desc="Open navigation drawer"]'
        }
      end
    
    #Criei um método para fazer login passando os métodos da classe "BaseScreen" passando o elemento mapeado e a variável e passando o valor.Onde preencho o e-mail, senha e clico no logar.
      def open_menu()
        click_xpath elementos_do_menu[:menuHeader]
      end
    end