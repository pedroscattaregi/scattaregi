@personal-information @edit-phone-number
Feature: As a user I want to be able to edit my phone number

  @edit-phone-number-successful
  Scenario: Edit phone number information successful
    Given I am logged in
    When I edit my phone number through the main menu
    Then I should receive a success message with title "Sucesso!" and description like "Telefone atualizado."
    And My phone number must be updated in personal information

