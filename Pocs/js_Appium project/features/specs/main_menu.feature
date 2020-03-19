#language: en

@main_menu
Feature: As a user I want to convert units

@wip
Scenario: Seem the left side menu
Given I land on home screen
When I press on the menu item
Then I should see the left menu

Scenario: Seem the left side menu
Given I land on home screen
When I press to favorite the conversion
And I go to the Favorites conversions
Then I verify that the conversion was added to the favorites
