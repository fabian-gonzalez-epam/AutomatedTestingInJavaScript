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
    async addBoard() {
        //await pages('login').open();
        console.log("Test board")
        browser.sleep(5500);
        await pages('dashboard').header.addButton.click()
        await pages('dashboard').header.selection('create').click()
        await pages('dashboard').addBoard.input.waitForEnabled()
        await pages('dashboard').addBoard.input.setValue('Board 10')
        await pages('dashboard').addBoard.createButton.waitForEnabled()
        await pages('dashboard').addBoard.createButton.click()
    }
}

module.exports = Interactions;