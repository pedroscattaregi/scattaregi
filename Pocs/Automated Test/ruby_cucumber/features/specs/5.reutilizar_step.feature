#language: en

Feature: Chamando outros Steps

    Scenario: Amassando laranjas
        Given que eu tenho 10 laranjas no estoque
        When eu amasso 2 laranjas
        Then eu verifico quantas laranjas sobraram no estoque.

    Scenario: Revendo laranjas laranjas da bolsa
        When eu revendo 2 laranjas
        Then eu verifico quantas laranjas eu fiquei.
    
