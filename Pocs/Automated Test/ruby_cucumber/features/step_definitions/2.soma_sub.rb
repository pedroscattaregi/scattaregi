Given("eu tenho {int} laranjas") do |int1|
  @saco_de_laranjas = int1
end

When("eu como {int} laranjas") do |int2|
  @comer = int2
  @resultadoSubtracao = @saco_de_laranjas - @comer
end

Then("eu vejo quantas laranjas sobraram.") do
  expect(@resultadoSubtracao).to eq 8
end

When("eu compro {int} laranjas") do |int3|
  @comprar = int3
  @resultadoSoma = @saco_de_laranjas + @comprar
end

Then("eu vejo quantas laranjas eu tenho.") do
  expect(@resultadoSoma).to eq 15
end
