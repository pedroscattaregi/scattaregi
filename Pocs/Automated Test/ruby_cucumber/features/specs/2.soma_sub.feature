#language: en

Feature: Cálculo de subtração e Soma.

Scenario: Fazer subtração.
Given eu tenho 10 laranjas
When eu como 2 laranjas
Then eu vejo quantas laranjas sobraram.

Scenario: Fazer soma.
Given eu tenho 10 laranjas
When eu compro 5 laranjas
Then eu vejo quantas laranjas eu tenho.