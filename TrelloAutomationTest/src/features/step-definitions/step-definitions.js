const assert = require('assert');
const {actor} = require('./../../screenplay')
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I login with fabian_gonzalez@epam.com', async function () {
    await actor('Epamer').login()
})