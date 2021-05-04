@reset-pin
Feature: As a user I want to be able to reset my Pin value

  @reset-pin-main-menu
  Scenario: Reset Pin value through the main menu
    Given I am logged in with a user to change pin
    When I reset my Pin value through the main menu
    Then I should receive a success message with title "Sucesso!" and description like "Agora sua conta está mais protegida"
    # the Pin is being reset again in @root/src/features/customer-squad/step-definitions/hooks

  @reset-pin-login
  Scenario: Reset Pin value through the main menu
    Given I land on banQi app welcome screen
    When I go to the login screen
    And I send my cpf and password to change pin
    And I send wrong Pin value 5 times
    And I reset my Pin value
    Then I should receive a success reset Pin message with title "Pronto!" and description like "Você redefiniu o seu PIN."
    And I should be logged in the home screen
    # the Pin is being reset again in @root/src/features/customer-squad/step-definitions/hooks