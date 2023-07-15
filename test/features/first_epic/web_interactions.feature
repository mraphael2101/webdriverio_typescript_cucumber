Feature: A feature to demonstrate how to manipulate GUI elements using WDIO

#  @web_interact
#  Scenario: Manipulate a Textfield
#    Given I have landed on a GUI Widget Library Examples Web Page - "inputs"
#    When I perform Web Interactions on a Textfield

#  @web_interact
#  Scenario: Manipulate a Drop-down menu
#    Given I have landed on a GUI Widget Library Examples Web Page - "dropdown"
#    When I perform Web Interactions on a Drop-down list

#  @web_interact
#  Scenario: Manipulate Checkboxes
#    Given I have landed on a GUI Widget Library Examples Web Page - "checkboxes"
#    When I perform Web Interactions on a Checkbox

#  @web_interact
#  Scenario: Manipulate Browser Window Tabs
#    Given I have landed on a GUI Widget Library Examples Web Page - "windows"
#    When I perform Web Interactions on a Window

#  @web_interact
#  Scenario: Manipulate Browser JS Alerts
#    Given I have landed on a GUI Widget Library Examples Web Page - "javascript_alerts"
#    When I perform Web Interactions on an Alert

#  @web_interact
#  Scenario: Manipulate Browser Base Authentication
#    Given I have landed on a GUI Widget Library Examples Web Page - "upload"
#    When I perform Web Interactions to upload a file

#  @web_interact
#  Scenario: Manipulate Browser Frames
#    Given I have landed on a GUI Widget Library Examples Web Page - "frames"
#    When I perform Web Interactions on a iFrame

  @web_interact
  Scenario: Manipulate Browser by Scrolling
    Given I have landed on the eBay HomePage
    When I perform scrolling events
