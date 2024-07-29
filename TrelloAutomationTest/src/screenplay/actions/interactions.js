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

        /* $("//button[@data-testid='header-create-menu-button']").waitForDisplayed())
        $("//button[@data-testid='header-create-menu-button']").waitForEnabled())
        $("//button[@data-testid='header-create-menu-button']").click())
        $("//span[text()='Create board']").waitForDisplayed())
        $("//span[text()='Create board']").waitForEnabled())
        $("//span[text()='Create board']").click())
        $("//input[@data-testid='create-board-title-input']").waitForDisplayed())
        $("//input[@data-testid='create-board-title-input']").waitForEnabled())
        $("//input[@data-testid='create-board-title-input']").setValue("Board")) */
         
        
    }
    
    async addBoard() {
        /*
        await $("//button[@data-testid='header-create-menu-button']").waitForDisplayed()
        await $("//button[@data-testid='header-create-menu-button']").waitForEnabled()
        await $("//button[@data-testid='header-create-menu-button']").click()
        $("//span[text()='Create board']").waitForDisplayed()
        $("//span[text()='Create board']").waitForEnabled()
        $("//span[text()='Create board']").click()
        $("//input[@data-testid='create-board-title-input']").waitForDisplayed()
        $("//input[@data-testid='create-board-title-input']").waitForEnabled()
        $("//input[@data-testid='create-board-title-input']").setValue("Board") */


        await pages('dashboard').header.addButton.waitForDisplayed()
        await pages('dashboard').header.addButton.waitForEnabled()
        await pages('dashboard').header.addButton.click()
        await pages('dashboard').header.selection('create').click()
        await pages('dashboard').addBoard.input.waitForEnabled()
        await pages('dashboard').addBoard.input.setValue('Board 10')
        await pages('dashboard').addBoard.createButton.waitForEnabled()
        await pages('dashboard').addBoard.createButton.click()
    }
}

module.exports = Interactions;