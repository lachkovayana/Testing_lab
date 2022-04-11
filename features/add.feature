Feature: Add new task result on page

Scenario: Addition task result
    Given I've got opened page "http://localhost:5500" 
    When When i submit form with entered text ":), :-(, :-(" 
    Then The new element appears on page
