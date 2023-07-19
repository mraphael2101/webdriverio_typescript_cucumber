Feature: Demo how WDIO adds value around leveraging the Page Objects Model
  As a user,
  I want to search for information on Google,
  So that I can find what I'm looking for.

  @wdio_pageobjects
  Scenario: Search for information on Google
    Given I am on the Google homepage
    When I click on the 'Accept all' button on the Privacy Policy Modal, if Displayed
    When I enter "WebdriverIO" in the search bar
    And I click the search button
    Then I should see "WebdriverIO is an all in one framework" in the search results
