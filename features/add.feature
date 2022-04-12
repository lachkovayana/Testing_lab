Feature: Add and clear task results on page

Scenario: Addition task result
    Given I've got opened page "http://localhost:5500" 
    When When i submit form with entered text ":), :-(, :-(" 
    Then The new element appears on page

Scenario: Clearing all elements on the page
    Given I've got opened page "http://localhost:5500" 
    When When I click the Clear button
    Then All elements disappear
