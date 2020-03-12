Quando("acesso a url") do
    visit('https://globoesporte.globo.com/futebol/times/corinthians/')
end
  
Então("eu verifico que estou na página correta") do
    expect(page).to have_current_path('https://globoesporte.globo.com/futebol/times/corinthians/', url:true)
end