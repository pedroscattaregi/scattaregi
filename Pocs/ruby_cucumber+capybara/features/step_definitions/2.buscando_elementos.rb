Quando("acesso a url de botoes") do
    visit('https://globoesporte.globo.com/futebol/times/corinthians/')    
end
  
Então("eu verifico se eu encontrei os elementos") do
    # procura elemento por xPath 
    page.all(:xpath, '/div[@class="pirulito-link pirulito-link-premiere"]')
    page.all(:css, '.pirulito-link pirulito-link-premiere')
end
