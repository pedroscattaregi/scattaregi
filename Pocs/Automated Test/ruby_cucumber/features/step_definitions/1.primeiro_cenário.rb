When("I sum {int} + {int}") do |value1, value2|
    @sum = value1 + value2
  end
  
  Then("the result must be {int}") do |result|
    expect(@sum).to eq result
    puts @sum 
  end