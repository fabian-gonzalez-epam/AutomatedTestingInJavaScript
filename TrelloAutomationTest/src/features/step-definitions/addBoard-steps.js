//const assert = require('assert');
const { actor } = require('../../screenplay');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('a 10 limit of boards in the user account', async function () {
    board_limit = 10;
    await actor('epamer');
});

Given('there are 9 boards', async function () {
    boards = 9;
    await actor('epamer');
});
Given('there are 10 boards', async function () {
    boards = 10;
    await actor('epamer');
});

When('the user adds a board', async function () {
    board_name = 'board10';
    await actor('epamer').addBoard(board_name);
});

Then('the new board is displayed', async function () {
    let boardExist = await actor('epamer').checkBoardExist(board_name);
    expect(boardExist).to.be.true;
});

Then(
    'the user receive an invitation to upgrade to add the board',
    async function () {
        let UpgradeMessage = await actor('epamer').checkUpgradeButtonExist();
        expect(UpgradeMessage).to.be.true;
    }
);

Then('the user have 10 boards', async function () {
    return true;
});
