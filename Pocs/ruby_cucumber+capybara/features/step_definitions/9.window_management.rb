Quando("trabalho com janelas diferentes") do
    visit('/mudancadefoco/janela')
    
    # janela recebe uma janela que foi aberta
    janela = window_opened_by do
        find(:xpath, '//a[@class="btn waves-light red"]').click
    end

    #muda foco para a nova janela
    within_window janela do
        title = find(:xpath, '//h5[@class="red-text text-darken-1 center"]')
        expect(title.text).to eq 'Você Abriu uma nova janela!!'
        expect(current_url).to eq 'https://automacaocombatista.herokuapp.com/mudancadefoco/newwindow'
        janela.close
    end
    sleep(3)
end

Quando("trabalho com alertas") do
    visit('/mudancadefoco/alert')
    
    find(:xpath, '//button[@onclick="jsAlert()"]').click
    page.accept_alert
    sleep(2)

    find(:xpath, '//button[@onclick="jsConfirm()"]').click
    page.dismiss_confirm
    sleep(2)

    find(:xpath, '//button[@onclick="jsPrompt()"]').click
    page.accept_prompt(with: 'asdasdasd')
    sleep(2)
end
  
