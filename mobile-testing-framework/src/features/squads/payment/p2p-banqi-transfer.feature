@P2P-banQi-transfer
Feature: As a user I want to transfer money to another banQi account
  Background:
    Given I am logged in

  @P2P-banQi-transfer-successful
  Scenario: P2P transfer successful in banQi
    Given I have balance greater than "R$ 1,23"
    When I go to the P2P banQi transfer section
    And I send "R$ 1,23" to a valid banQi account
    Then I should receive the complete transfer success message

  Scenario: P2P transfer without enough balance
    Given I have balance greater than "R$ 1,00"
    When I go to the P2P banQi transfer section
    And I try to send more money than I have in balance to a valid banQi account
    Then I should get a red error message like "O valor é maior que o saldo disponível"