@personal-information @edit-address
Feature: As a user I want to be able to edit my address

  @edit-address-successful
  Scenario: Edit address information successful
    Given I am logged in
    When I edit my address through the main menu
    Then I should have my address updated in personal information

