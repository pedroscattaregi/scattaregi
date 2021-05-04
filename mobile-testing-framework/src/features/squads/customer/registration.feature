@registration
Feature: As a user I want to create my banQi account

  @registration-successful
  Scenario: Create banQi account successfully
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send my cpf number
    And I send my email and confirm it
    And I send my password and confirm it
    And I send my legal name
    And I send my date of birthday
    And I send my mother's name
    And I send my zip code
    And I confirm my address information
    And I send my phone number
    And I send the OTP code confirming my phone number
    And I continue registration without setting any referral code
    And I set my pin value
    And I confirm my pin value
    And I review my information
    And I submit my information
    Then I must receive the successful created banQi account message
    And I should be logged in the home screen
  
  Scenario: Check Terms and Conditions of Usage screen
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I open the Terms and Conditions
    Then I am able to read the Terms and Conditions screen

  Scenario: Verify that is not possible to continue registration flow using an invalid CPF
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send an invalid CPF value like "001-001-001.11"
    Then I should get a red error message like "Opa, esse CPF não é valido. Tente de novo."

  Scenario: Verify that is not possible to continue registration flow using an already in use CPF
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send an already in use CPF
    Then I should be redirected to the login flow

  Scenario: Verify the error when email and email confirmation are not equal
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send my cpf number
    And I send my email and a diferent one to confirm it
    Then I should get a red error message like "Os e-mails não são iguais."

  Scenario: Verify the error when password and password confirmation are not equal
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send my cpf number
    And I send my email and confirm it
    And I send my password and a different one to confirm it
    Then I should get a red error message like "A senha e a confirmação de senha devem ser iguais."

  Scenario: Try to register an account with less than 18 years
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send my cpf number
    And I send my email and confirm it
    And I send my password and confirm it
    And I send my legal name
    And I send a under age date of birthday
    Then I should get a red error message like "Você precisa ter no mínimo 18 anos para efetuar o cadastro"

  Scenario: Verify that sending an invalid Zip Code will go to address details empty
    Given I land on banQi app welcome screen
    When I start the registration flow
    And I send my first name
    And I send my cpf number
    And I send my email and confirm it
    And I send my password and confirm it
    And I send my legal name
    And I send my date of birthday
    And I send my mother's name
    And I send an invalid zip code like "00000-001"
    Then The address form must be empty