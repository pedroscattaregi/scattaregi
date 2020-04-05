Quando("eu faço Upload") do
    visit('/outros/uploaddearquivos')
    # Encontrar um input do tipo "File"
    # Usar o comando pwd no cmd para saber onde estou (caminho até a pasta do projeto)
    #find(:xpath, '//input[@id="upload"]').click
    attach_file('upload','./features/images/teste.jpg',make_visible: true)
    sleep(5)
end

