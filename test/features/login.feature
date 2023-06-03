Feature: The Internet Guinea Pig Website

  Background:
    Given I am on the login page
    Then I should see a flash message saying <message>
    And I setup data
    |username |keyword     |
    |abc01    |Erik Larson |
    |abc02    |Erik Ronson |

  @wip_unique
  Scenario: My first scenario
    Then I should do something else


  @wip_unique
  Scenario Outline: My first outline
    Then I should see a flash message saying <message>

    Examples:
      | username  | password             | message                        |
      | tom smith | SuperSecretPassword! | You logged into a secure area! |
      | tom smith | SuperSecretPassword! | You logged into a secure area! |
