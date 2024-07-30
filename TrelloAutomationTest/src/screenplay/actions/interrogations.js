const { pages } = require('../../po');

class Interrogations {
    async checkIfEnter() {
        await pages('dashboard').boardsMenu.tittle.waitForDisplayed()
        let result = await pages('dashboard').boardsMenu.tittle.isDisplayed();
        return result
    }
    async checkIfNoEnter() {
        await pages('login').errorBox.message.waitForDisplayed();
        let result = await pages('login').errorBox.message_text
        return result
    }
    async checkBoardExist () {
        await pages('dashboard').sideMenu.board('board10').waitForDisplayed();
        let result = await pages('dashboard').sideMenu.board('board10').isDisplayed()
        return result
    }

}

module.exports = Interrogations;