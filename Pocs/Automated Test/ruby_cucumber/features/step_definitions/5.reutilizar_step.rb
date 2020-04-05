Given("que eu tenho {int} laranjas no estoque") do |valor1|                     
    @laranjas = valor1
  end                                                                          
                                                                               
  When("eu amasso {int} laranjas") do |laranjas_amassadas|                                    
    @estoque = @laranjas - laranjas_amassadas
  end                                                                          
                                                                               
  Then("eu verifico quantas laranjas sobraram no estoque.") do                 
    expect(@estoque).to eq 8
  end                                                                          
                                                                               
  When("eu revendo {int} laranjas") do |laranjas_revendidas|                                   
    steps %Q{
       Given que eu tenho 10 laranjas no estoque
    }
    @estoque = @laranjas - laranjas_revendidas
  end                                                                          
                                                                               
  Then("eu verifico quantas laranjas eu fiquei.") do                           
    expect(@estoque).to eq 8
  end                                                                          