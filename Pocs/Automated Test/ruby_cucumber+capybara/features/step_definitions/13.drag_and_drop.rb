Quando("eu seleciono elemento") do
    visit('/iteracoes/draganddrop')
    @imagem = find(:xpath, '//img[@id="winston"]')
    @dropzone = find(:xpath, '//div[@id="dropzone"]')
    @imagem.drag_to(@dropzone)
    sleep(2)
end