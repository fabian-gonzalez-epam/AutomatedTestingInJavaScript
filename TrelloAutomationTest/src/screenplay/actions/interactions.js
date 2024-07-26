const { pages } = require('./../../po');

class Interactions {
    async login(username, password) {
        await (await pages('login').open());
        await (await pages('login').loginForm.input('username').waitForDisplayed());
        await (await pages('login').loginForm.input('username').waitForEnabled());
        await (await pages('login').loginForm.input('username').setValue(username));
        
        await (await pages('login').loginForm.submitButton.waitForDisplayed());
        await (await pages('login').loginForm.submitButton.waitForEnabled());
        await (await pages('login').loginForm.submitButton.click());
        
        await (await pages('login').loginForm.input('password').waitForDisplayed());
        await (await pages('login').loginForm.input('password').waitForEnabled());
        await (await pages('login').loginForm.input('password').setValue(password));
        
        await (await pages('login').loginForm.submitButton.waitForDisplayed());
        await (await pages('login').loginForm.submitButton.waitForEnabled());
        await (await pages('login').loginForm.submitButton.click()); 

        /* await (await $("//button[@data-testid='header-create-menu-button']").waitForDisplayed())
        await (await $("//button[@data-testid='header-create-menu-button']").waitForEnabled())
        await (await $("//button[@data-testid='header-create-menu-button']").click())
        await (await $("//span[text()='Create board']").waitForDisplayed())
        await (await $("//span[text()='Create board']").waitForEnabled())
        await (await $("//span[text()='Create board']").click())
        await (await $("//input[@data-testid='create-board-title-input']").waitForDisplayed())
        await (await $("//input[@data-testid='create-board-title-input']").waitForEnabled())
        await (await $("//input[@data-testid='create-board-title-input']").setValue("Board")) */
         
        
    }
    
    async addBoard() {
        /* await (await $("//button[@data-testid='header-create-menu-button']").waitForDisplayed())
        await (await $("//button[@data-testid='header-create-menu-button']").waitForEnabled())
        await (await $("//button[@data-testid='header-create-menu-button']").click())
        await (await $("//span[text()='Create board']").waitForDisplayed())
        await (await $("//span[text()='Create board']").waitForEnabled())
        await (await $("//span[text()='Create board']").click())
        await (await $("//input[@data-testid='create-board-title-input']").waitForDisplayed())
        await (await $("//input[@data-testid='create-board-title-input']").waitForEnabled())
        await (await $("//input[@data-testid='create-board-title-input']").setValue("Board")) */


        await (await pages('dashboard').header.addButton.waitForDisplayed())
        await (await pages('dashboard').header.addButton.waitForEnabled())
        await (await pages('dashboard').header.addButton.click())
        await (await pages('dashboard').header.selection('create').click())
        await (await pages('dashboard').addBoard.input.waitForEnabled())
        await (await pages('dashboard').addBoard.input.setValue('Board 10'))
        await (await pages('dashboard').addBoard.createButton.waitForEnabled())
        await (await pages('dashboard').addBoard.createButton.click())
    }
}

module.exports = Interactions;