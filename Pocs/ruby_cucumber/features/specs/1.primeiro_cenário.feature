#language: en

Feature: Perform a sum.

- I, as user, want to perform sum

Scenario: Perform a sum.
When I sum 2 + 2
Then the result must be 4