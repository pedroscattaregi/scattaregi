Quando("eu faco cadastro") do
    visit('/users/new')

    fill_in(id: 'user_name', with: 'Pedro')
    find('#user_lastname').set('Scattaregi')
    find('#user_email').send_keys('pedro.scattaregi@teste.com')
    find('#user_address').set('Rua Dom José Antônio dos Reis, 139')
    find('#user_university').send_keys('Fatec SP')
    find('#user_profile').set('Analista de Qualidade')
    find('#user_gender').send_keys('Masculino')
    find('#user_profile').set('Analista de Qualidade')
    find(:xpath, '//*[@id="user_gender"]').send_keys('Analista de Qualidade')
    find(:xpath, '//*[@id="user_age"]').set('23')
    find('input[value="Criar"]').click
end
  
Então("eu verifico se fui cadastrado") do
    message = find(:xpath, '//*[@id="notice"]')
    expect(message.text).to eq 'Usuário Criado com sucesso'
end