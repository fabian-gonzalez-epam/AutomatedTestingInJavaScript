Feature: Sign in
    Only people with a registered email in the database can have access

    @regression
    Scenario: Not valid user sign in
        Given an user without a registered email in the database
        When the user log in with valid credentials
        Then the user receives an invitation to sign up

    @smoke
    Scenario: Valid User sign in
        Given an user with a registered email in the database
        When the user log in with valid credentials
        Then the user sees the home page with all the workspaces
