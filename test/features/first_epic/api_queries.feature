Feature: Testing API endpoints using Supertest

  @api
  Scenario: GET request to /users endpoint
    Given I have an API endpoint "http://localhost:3000/api"
    When I send a GET request to /users endpoint
    Then I should receive a 200 OK status code
    And the response should be an array of users

  @api
  Scenario: POST request to /users endpoint
    Given I have an API endpoint "http://localhost:3000/api"
    When I send a POST request to /users endpoint with the following details:
      | name     | email              |
      | John Doe | john.doe@test.com  |
    Then I should receive a 201 Created status code
    And the response should contain the following details:
      | name     | email              |
      | John Doe | john.doe@test.com  |
