@login
Feature: Login
    As a developer in company I want to access to trello

    Scenario: EPAM worker login

        Given I login with fabian_gonzalez@epam.com
        When I click login
        Then I see the main dashboard