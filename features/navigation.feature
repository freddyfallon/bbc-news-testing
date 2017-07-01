Feature: Navigating to different sections

  Scenario: Moving to the UK section
    Given I visit "http://www.bbc.co.uk/news"
    When I click on UK
    Then I should be at "http://www.bbc.co.uk/news/uk"
