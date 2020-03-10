When("eu multiplico {int} pelo {int}") do |laranjas, valor_unitario|                        
  @conta = laranjas * valor_unitario
end                                                                          
                                                                             
Then("o valor pago na {int}.") do |compra|                                      
  expect(@conta).to eq compra 
end                                                                          
                                                                             
When("eu multiplico {int} pelo {float}") do |laranjas, valor_unitario|                     
  @conta = laranjas * valor_unitario
end                                                                          