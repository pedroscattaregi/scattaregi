Given("que eu tenho {int} laranjas na bolsa.") do |bolsa|
  @bolsa = bolsa
end

When("eu adiciono {int} na bolsa") do |laranjas|
  @bolsa += laranjas 
end

Then("eu verifico quantas laranjas eu tenho na {int}.") do |bolsa|
  expect(@bolsa).to eq bolsa
end

When("eu removo {int} da bolsa") do |laranjas|
  @bolsa -= laranjas
end