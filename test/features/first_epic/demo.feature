Feature: The Internet Guinea Pig Website

  Background:
    Given I have landed on the Google HomePage
#    And I setup data
#    |username |keyword     |
#    |abc01    |Erik Larson |
#    |abc02    |Erik Ronson |

  @wip_unique
  Scenario Outline: My first outline
    When I click on the 'Accept all' button on the Privacy Policy Modal, if Displayed
    And I search with the keyword <SearchItem>
    And I click on the first search result
    Then the URL should match the <ExpectedUrl>

    Examples:
      | TestId      | SearchItem | ExpectedUrl             |
      | demo_tc_001 | WDIO       | https://webdriver.io/   |
      | demo_tc_002 | Cypress    | https://www.cypress.io/ |

