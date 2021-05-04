@main-menu
Feature: As a user I want to have all correct options in the hamburguer menu

  Scenario: Checking all main menu options
    Given I am logged in
    When I open the hamburguer menu clicking on 'meu banQi' top left icon
    Then I should have all correct options
