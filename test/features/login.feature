Feature: The Internet Guinea Pig Website

  @wip_unique
  Scenario Outline: My first scenario in WebDriverIO
    Given I am on the login page
    When I do something
#    Then I should see a flash message saying <message>

    Examples:
      | username  | password             | message                        |
      | tom smith | SuperSecretPassword! | You logged into a secure area! |
