Feature: Demo feature

  Background:
    Given I have landed on the Google HomePage
#    When I do cucumber world manipulation

  @wip_unique
  Scenario Outline: Sample outline
    When I click on the 'Accept all' button on the Privacy Policy Modal, if Displayed
    And I search with the keyword <SearchItem>
    And I click on the first search result
    Then the URL should match the <ExpectedUrl>

    Examples:
      | TestId      | SearchItem | ExpectedUrl             |
      | demo_tc_001 | WDIO       | https://webdriver.io/   |

