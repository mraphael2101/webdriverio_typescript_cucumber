Feature: The Internet Guinea Pig Website

  @mobile1
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    # When I login with <username> and <password>
    # Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #    | foobar   | barfoo               | Your username is invalid!      |

  @Mobile_Demo
  Scenario: this is a demo test
    Given I am on the front Page
    Then I navigated to Accessibility
    Then I navigated to Accessibility Service and move back
    And I verify Accessibility Tab is Visible
