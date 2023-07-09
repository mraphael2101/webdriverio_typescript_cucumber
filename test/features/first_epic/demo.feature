Feature: Demo feature

  Background:
    Given I have landed on the Google HomePage
#    When I manipulate cucumber world

  @wip_unique
  Scenario Outline: Sample outline
    When I click on the 'Accept all' button on the Privacy Policy Modal, if Displayed
    And I search with the keyword <Search Item>
    And I click on the first search result
    Then the URL should match the <Expected Url>

    Examples:
      | TestId      | Search Item | Expected Url          |
      | demo_tc_001 | WDIO        | https://webdriver.io/ |
