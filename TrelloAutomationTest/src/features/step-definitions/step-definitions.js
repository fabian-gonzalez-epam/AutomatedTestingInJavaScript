const assert = require('assert');
const { actor } = require('./../../screenplay');
const { Given, When, Then } = require('@cucumber/cucumber');

notLogged = true;

Given('the user log in', async function () {
    if (notLogged) {
        await actor('epamer').login();
        notLogged = false;
    }
});
