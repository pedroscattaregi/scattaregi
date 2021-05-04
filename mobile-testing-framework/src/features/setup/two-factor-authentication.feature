@two-factor-authentication
Feature: As a user I want to be able to authenticate a new device to the account

  Scenario: Authenticate a new device to the account
    Given I land on banQi app welcome screen
    When I go to the login screen
    And I send my cpf and password
    And I authenticate my device
    And I send my pin value
    Then I should be logged in the home screen