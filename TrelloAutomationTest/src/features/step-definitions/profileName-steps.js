//const assert = require('assert');
const { actor } = require('../../screenplay');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('the new username proposed is {string}', async function (status) {
    if (status == 'taken') {
        username = 'fabiangonzalez';
    } else {
        username = 'fabiangonzalez';
    }
    await actor('epamer');
});

When('the user changes his username', async function () {
    await actor('epamer').changeProfileName(username);
});

Then('a message with {string} is display', async function (message) {
    if (message == 'Saved') {
        let success_label = await actor('epamer').checkErrorLabel();
        expect(success_label).to.be.true;
    } else {
        let success_label = await actor('epamer').checkSuccessLabel();
        expect(success_label).to.be.true;
    }
});

Then('the username reamains unchanged', async function () {
    return true;
});
Then('the user should see the new username', async function () {
    return true;
});
