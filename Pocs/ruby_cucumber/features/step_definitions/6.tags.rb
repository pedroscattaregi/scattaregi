Given("que eu tenho {int} laranjas") do |laranjas|                                
    @laranjas = laranjas
end                                                                          
                                                                               
When("eu divido com {int} amigos") do |pessoas|                                  
    @divisao = @laranjas / pessoas
end                                                                          
                                                                               
Then("eu vejo quantas laranjas cada um ficou.") do                           
    expect(@divisao).to eq 5
end                                                                          
                                                                               
When("multiplico por {int}") do |multiplicador|                                       
    @multiplicacao = @laranjas * multiplicador
end  
  
Then("eu verifico quantas laranjas eu tenho.") do
    expect(@multiplicacao).to eq 30
end