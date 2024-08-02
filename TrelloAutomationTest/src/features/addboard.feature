Feature: Add board
    Users can add up to 10 boards

    Background: The user is login
        Given the user log in

    @smoke
    Scenario: Free suscriber user create his tenth board
        Given a 10 limit of boards in the user account
        And there are 9 boards
        When the user adds a board
        Then the new board is displayed

    @smoke
    Scenario: Free suscriber user create his eleventh board
        Given a 10 limit of boards in the user account
        And there are 10 boards
        When the user adds a board
        Then the user receive an invitation to upgrade to add the board
