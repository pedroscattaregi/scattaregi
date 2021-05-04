@login
Feature: As a user I want to login in banQi
  Background:
    Given I land on banQi app welcome screen
    When I go to the login screen

  @login-successful
  Scenario: Login successful in banQi
    When I send my cpf and password
    And I send my pin value
    Then I should be logged in the home screen
  
  Scenario: Try to login with invalid cpf
    When I put a invalid cpf value like "001-001-001.11"
    Then I should get a red error message like "Opa, esse CPF não é valido. Tente de novo."

  Scenario: Try to login with the wrong password
    When I try to login with wrong password
    Then I should get a red error message like "CPF ou senha inválida. Tente novamente."

  # As it is getting a random CPF, could possibly be registered, but the password will be wrong and the same error is returned, creating a false positive
  Scenario: Try to login with a not registered cpf
    When I try to login with a not registered cpf
    Then I should get a red error message like "CPF ou senha inválida. Tente novamente."