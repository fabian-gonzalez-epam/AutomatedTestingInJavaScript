const { pages } = require('../../po');

class Interrogations {
    async checkIfEnter() {
        await pages('dashboard').boardsMenu.tittle.waitForDisplayed()
        return pages('dashboard').boardsMenu.tittle.isDisplayed()
    }
    async checkIfNoEnter() {
        await pages('login').errorBox.message.waitForDisplayed();
        return pages('login').errorBox.message_text        
    }
    async checkBoardExist () {
        await pages('dashboard').sideMenu.board('board10').waitForDisplayed();
        return pages('dashboard').sideMenu.board('board10').isDisplayed()

    }

}

module.exports = Interrogations;