#language: en

Feature: Trabalhar com contexto.

    Background:
        Given que eu tenho 10 laranjas na bolsa.

    Scenario Outline: Colocar mais laranjas.
        When eu adiciono <laranjas> na bolsa
        Then eu verifico quantas laranjas eu tenho na <bolsa>.

    Examples:
        |laranjas   |bolsa|
        |2          |12   |
        |7          |17   |
        |12         |22   |

    @tag_scenario
    Scenario Outline: Tirar laranjas da bolsa.
        When eu removo <laranjas> da bolsa
        Then eu verifico quantas laranjas eu tenho na <bolsa>.

    Examples:
        |laranjas   |bolsa|
        |2          |8    |
        |7          |3    |
        |12         |-2   |
    
