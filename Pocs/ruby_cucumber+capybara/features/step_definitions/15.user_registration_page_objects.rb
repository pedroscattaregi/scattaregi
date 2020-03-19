Quando("eu cadastro usuario") do
    visit('/users/new')
    fill_in(id: 'user_name', with: 'teste')
    find('#user_lastname').set('Scattaregi')
    find('#user_email').send_keys('pedro.scattaregi@teste.com')
    find('#user_profile').set('Analista de Qualidade')
    find('input[value="Criar"]').click
end

Então("eu verifico se o usuario foi cadastrado.") do
    message = find(:xpath, '//*[@id="notice"]')
    expect(message.text).to eq 'Usuário Criado com sucesso'
    sleep(2)
end