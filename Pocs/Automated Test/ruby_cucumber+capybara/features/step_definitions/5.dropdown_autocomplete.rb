Quando("eu seleciono uma opcao no dropdown") do
    visit('/buscaelementos/dropdowneselect')
    find(:xpath, '//a[@class="btn dropdown-button"]').click
    find(:xpath, '//*[@id="dropdown4"]').click
    sleep(1)
    find(:xpath, '//*[@id="dropdown"]').click
    select('Chrome', from: 'dropdown')
    #find(:xpath, 'xxxxxxx').select_option
    sleep(2)
    
end
  
Quando("eu preencho com autocomplete") do
    visit('/widgets/autocomplete')
    find(:xpath, '//*[@id="autocomplete-input"]').send_keys('Rio de Jane')
    find(:xpath, '//ul[@text="Rio de Janeiro"]').click
    
    sleep(2)
end
  