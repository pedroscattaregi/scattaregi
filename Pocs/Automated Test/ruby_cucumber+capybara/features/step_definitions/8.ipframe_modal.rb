Quando("eu seto foco em um iframe") do
    visit('/mudancadefoco/iframe')
    within_frame(:xpath, '//iframe[@id="id_do_iframe"]') do
        #iremos faer as açoes dentro do iframe
        find(:xpath, '//*[@id="first_name"]').send_keys('Pedro')
    end
    sleep(3)
end

Quando("eu seto foco em um modal") do
    visit('/mudancadefoco/modal')
    find(:xpath, '//a[@class="waves-light btn modal-trigger"]').click
    within(:xpath, '//div[@id="modal1"]') do
        #iremos faer as açoes dentro do iframe
        @title = find(:xpath, '//*[@class="modal-content"]/h4')
        expect(@title.text).to eq 'Modal Teste'
    end
    sleep(3)
end
