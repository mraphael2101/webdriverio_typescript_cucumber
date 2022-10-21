Feature: The Internet Guinea Pig Website

  @wip_unique
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    #Then I should see a flash message saying <message>

    Examples:
      | username  | password             | message                        |
      | tom smith | SuperSecretPassword! | You logged into a secure area! |
