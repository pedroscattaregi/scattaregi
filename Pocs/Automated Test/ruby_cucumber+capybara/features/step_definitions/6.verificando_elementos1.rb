Quando("eu clico no botao") do
    visit('/buscaelementos/botoes')
    find(:xpath, '//a[@class="waves-light btn"]').click
    sleep(2)
end
  
Então("eu verifico se o texto apareceu na tela com sucesso") do
=begin
    Opções alternativas a comparação:s
    find(:xpath, '//div[@id="div1"]').assert_text('Você Clicou no Botão!')
    find(:xpath, '//div[@id="div1"]').assert_text('Você Clicou no Botão!')
    have_text('Você Clicou no Botão!')
=end
    @texto = find(:xpath, '//div[@id="div1"]')
    expect(@texto.text).to eq 'Você Clicou no Botão!'
end

Quando("eu clico no botao de novo") do
    visit('/buscaelementos/botoes')
    find(:xpath, '//a[@id="teste"]').click
end
  
Então("eu verifico se o texto desapareceu da tela com sucesso") do
    #assert_no_text(text, 'Você Clicou no Botão!')
    has_no_text?('Você Clicou no Botão!')
    sleep(2)
end
  

