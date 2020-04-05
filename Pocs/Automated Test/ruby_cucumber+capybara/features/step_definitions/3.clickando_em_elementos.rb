Quando("acesso a pagina do corinthians e clico em botoes") do
    visit('https://globoesporte.globo.com/futebol/times/corinthians/')
    # opções de click:
    #click_on('Assine agora')
    #find(class: 'assine-premiere').right_click
    #sleep(5)
    #find(class: 'assine-premiere').click
    find(:xpath, '//div[@class="pirulito-link pirulito-link-premiere"]').click
    sleep(5)
end

