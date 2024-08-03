const { pages } = require('./../../po');

class Interactions {
    async login(username, password) {
        await pages('login').open();
        await pages('login').loginForm.input('username').waitForDisplayed();
        await pages('login').loginForm.input('username').waitForEnabled();
        await pages('login').loginForm.input('username').setValue(username);

        await pages('login').loginForm.submitButton.waitForDisplayed();
        await pages('login').loginForm.submitButton.waitForEnabled();
        await pages('login').loginForm.submitButton.click();

        await pages('login').loginForm.input('password').waitForDisplayed();
        await pages('login').loginForm.input('password').waitForEnabled();
        await pages('login').loginForm.input('password').setValue(password);

        await pages('login').loginForm.submitButton.waitForDisplayed();
        await pages('login').loginForm.submitButton.waitForEnabled();
        await pages('login').loginForm.submitButton.click();
    }

    async addBoard(name) {
        await pages('dashboard').header.addButton.waitForDisplayed();
        await pages('dashboard').header.addButton.waitForEnabled();
        await pages('dashboard').header.addButton.click();
        await pages('dashboard').header.selection('create').click();
        await pages('dashboard').addBoard.input.waitForEnabled();
        await pages('dashboard').addBoard.input.setValue(name);
    }

    async changeProfileName(name) {
        await pages('board').header.profileButton.click();
        await pages('board')
            .header.menu_selection('profile_visibility')
            .click();
        await pages('profile').usernameForm.input.waitForDisplayed();
        await pages('profile').usernameForm.input.waitForEnabled();
        await pages('profile').usernameForm.input.setValue(name);
        await pages('profile').usernameForm.saveButton.click();
    }
}

module.exports = Interactions;
