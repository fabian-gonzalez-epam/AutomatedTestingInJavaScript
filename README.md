# Software testing fundamentals task

# Sign in / Sign up section

Feature: Sign in 
	 Only people with a registered email in the database can have access

Scenario: Valid User sign in
Given users with a registered email in the database can access
When the users log in with valid credentials
Then sees the home page with all the users workspaces

Scenario: Not valid user sign in
Given users with a registered email in the database can access
When the users log in with valid credentials 
But not registered
Then sees a pop up message to sign up


# User profile section

Feature: Edit user profile
	 Users can change the username only if is not taken by another user

Scenario: User try to change his username already taken by another user
Given the user is logged in
When the user changes his username and is already taken
Then an error message "Username is taken" is display

Scenario: User try to change his username not taken
Given the user is logged in
When the user changes his username and not already taken
Then the user should see his new username

# Workspace section

Feature: Add board
	Users can add up to 10 boards
Scenario: Free suscriber user create his first board
Given a 10 limit of boards in users account
And there are 0 boards
When user add a board
Then the user should have 1 board

Scenario: Free suscriber user create his eleventh board
Given a 10 limit of boards in users account
And there are 10 boards
When user add a board
Then the user receive an invitation to upgrade

Scenario: Paid suscriber user create his eleventh board
Given no limit of boards in users account
And there are 10 boards
When user add a board
Then the user should have 11 boards

Feature: Create a list
	User can create a list, only when they receive a list tittle

Scenario: User create a list with list tittle
Given there are 0 list
When user add a lists and adds a tittle
Then the user should have 1 list

Scenario: User create a list with list tittle
Given there are 0 list
When user add a lists and with not providing a tittle
Then still there are 0 list

Feature: Create a card
         User can create a card inside a list, only when the card receive a title
Scenario: User create a card with a title
Given there are 0 cards in the list
When user add a lists and adds a title
Then the user should have 1 card in the list

Scenario: User create a list without a tittle
Given there are 0 cards in a list
When the user add a card to the list without providing a title
Then there are still 0 cards in the list

Feature: Searching in the workspace

Scenario: User runs a search in the workspace by board tittle 
Given the user is on the workspace
When the user perform a search by the board tittle "Update" 
Then all boards with the title "Update" are displayed in the search results 

Feature: Card filtering

Scenario: User filters the cards in the board by members
Given the user has task assigned
When the user filters the cards by card assigned to the user
Then the cards shown in the should have the user profile name initials 

Feature: Edit workspace
	 Users can change the workspace shortname only if is not taken by another workspace

Scenario: User try to change his workspace name already taken by another workspace
Given the user is in a workspace
When the user changes the shortname and is already taken
Then an error message "Shortname is taken" is display

Scenario: User try to change his username not taken
Given the user is in a workspace
When the user changes the shortname and is not already taken
Then the user should see the new shortname in the url
