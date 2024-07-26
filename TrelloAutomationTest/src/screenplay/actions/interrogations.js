const { pages } = require('../../po');

class Interrogations {
    async checkIfEnter() {
<<<<<<< HEAD
        await pages('dashboard').boardsMenu.tittle.waitForDisplayed()
        let result = await pages('dashboard').boardsMenu.tittle.isDisplayed();
        return result
    }
    async checkIfNoEnter() {
        await pages('login').errorBox.message.waitForDisplayed();
        let result = await pages('login').errorBox.message_text
        return result
=======
        await pages('dashboard').boardsMenu.tittle.waitForDisplayed();
        return pages('dashboard').boardsMenu.tittle.isDisplayed();
    }
    async checkIfNoEnter() {
        await pages('login').errorBox.message.waitForDisplayed();
        return pages('login').errorBox.message_text;
>>>>>>> d21ef865b53ac62735b80eb373bfa3daca7d339c
    }
    async checkBoardExist() {
        await pages('dashboard').sideMenu.board('board10').waitForDisplayed();
<<<<<<< HEAD
        let result = await pages('dashboard').sideMenu.board('board10').isDisplayed()
        return result
=======
        return pages('dashboard').sideMenu.board('board10').isDisplayed();
>>>>>>> d21ef865b53ac62735b80eb373bfa3daca7d339c
    }
}

module.exports = Interrogations;
