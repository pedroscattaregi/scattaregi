@reset-password
Feature: As a user, I want to ask to reset password

  @reset-password-successful
  Scenario: Asking to reset password email successful
    Given I land on banQi app welcome screen
    When I go to the login screen
    And I ask to to reset password because I forgot
    Then I should receive a success message with title "Sucesso!" and description like "Enviamos um email com as instruções de recuperação de senha."