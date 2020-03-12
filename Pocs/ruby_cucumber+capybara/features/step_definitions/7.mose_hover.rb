Quando("eu vou ate o elemento") do
    visit('/iteracoes/mousehover')
    find(:xpath, '//p[@class="activator"]').hover
end

  