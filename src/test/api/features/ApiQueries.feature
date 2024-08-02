Feature: Testing API endpoints using Supertest
         As a consumer,
         I want to Get a list of users from https://reqres.in/api/users

  @api
  Scenario: Get a list of users
    Given I want to get a list of users
    When I make a GET request to the users endpoint
    Then I should receive a list of users
