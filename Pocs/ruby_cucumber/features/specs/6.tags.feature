#language: en
@tag_feature
Feature: Cálculo de divisão/multiplicação.

Scenario: Fazer divisão
Given que eu tenho 10 laranjas
When eu divido com 2 amigos
Then eu vejo quantas laranjas cada um ficou.

@tag_scenario @tag_comeco
Scenario: Fazer multiplicação
Given que eu tenho 10 laranjas
When multiplico por 3 
Then eu verifico quantas laranjas eu tenho.