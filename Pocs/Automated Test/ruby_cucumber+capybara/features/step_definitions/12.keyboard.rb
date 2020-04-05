Quando("eu envio uma keyboard") do
    visit('/users/new')
    find(:xpath, '//*[@id="user_name"]').send_keys(:page_down)
    find(:xpath, '//div[@value="Criar"]').send_keys(:enter)
    sleep(2)
end