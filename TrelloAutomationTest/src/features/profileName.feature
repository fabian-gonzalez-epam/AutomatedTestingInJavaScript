Feature: Edit user profile
    Users can change the username only if is not taken by another user

    Background: The user is login
        Given the user log in

    @smoke
    Scenario: User try to change his username
        Given the new username proposed is "<status>"
        When the user changes his username
        Then a message with "<text>" is display

        Examples:
            | status    | text              |
            | taken     | Saved             |
            | not taken | Username is taken |
