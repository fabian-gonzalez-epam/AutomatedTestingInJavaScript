const assert = require('assert');
const { actor } = require('./../../screenplay');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('an user with a registered email in the database', async function () {
    actor_name = 'epamer';
});
Given('an user without a registered email in the database', async function () {
    actor_name = 'student';
});

When('the user log in with valid credentials', async function () {
    await actor(actor_name).login();
});

Then('the user sees the home page with all the workspaces', async function () {
    let isLoggedin = await actor('epamer').checkIfEnter();
    expect(isLoggedin).to.be.true;
});

Then('the user receives an invitation to sign up', async function () {
    let consoleMessage = await actor('student').checkIfNoEnter();
    expect(consoleMessage).to.equal(
        'Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.'
    );
});
