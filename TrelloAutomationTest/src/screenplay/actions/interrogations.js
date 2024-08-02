const { pages } = require('../../po');

class Interrogations {
    async checkIfEnter() {
        await pages('dashboard').boardsMenu.tittle.waitForDisplayed();
        let result = await pages('dashboard').boardsMenu.tittle.isDisplayed();
        return result;
    }
    async checkIfNoEnter() {
        await pages('login').errorBox.message.waitForDisplayed();
        let result = await pages('login').errorBox.message_text;
        return result;
    }
    async checkBoardExist(board_name) {
        await pages('dashboard').addBoard.createButton.waitForEnabled();
        await pages('dashboard').addBoard.createButton.click();
        await pages('dashboard').sideMenu.board(board_name).waitForDisplayed();
        let result = await pages('dashboard')
            .sideMenu.board(board_name)
            .isDisplayed();
        return result;
    }
    async checkUpgradeButtonExist() {
        await pages(
            'dashboard'
        ).addBoard.upgradeWorkspaceButton.waitForDisplayed();
        return await pages(
            'dashboard'
        ).addBoard.upgradeWorkspaceButton.isDisplayed();
    }
    async checkSuccessLabel() {
        await pages('profile').usernameForm.successLabel.waitForDisplayed();
        return await pages('profile').usernameForm.successLabel.isDisplayed();
    }
    async checkErrorLabel() {
        await pages('profile').usernameForm.errorLabel.waitForDisplayed();
        return await pages('profile').usernameForm.errorLabel.isDisplayed();
    }
}

module.exports = Interrogations;
