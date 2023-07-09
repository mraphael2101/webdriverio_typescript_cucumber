Feature: The Internet Guinea Pig Website

#  Background:
#    Given I am on the login page
#    And I setup data
#    |username |keyword     |
#    |abc01    |Erik Larson |
#    |abc02    |Erik Ronson |

#  @wip_unique
#  Scenario: My first scenario
#    Then I should do something else

  @wip_unique
  Scenario Outline: My first outline
    Given Google page is opened
#    Given that I am on the 'Google' HomePage
#    When I search with the keyword <SearchItem>
#    And I click on the first search result
#    Then the URL should match the <ExpectedUrl>

    Examples:
      | TestId      | SearchItem | ExpectedUrl            |
      | demo_tc_001 | WDIO       | https://webdriver.io/  |
      | demo_tc_002 | Cypress    | https://www.cypress.io/|

