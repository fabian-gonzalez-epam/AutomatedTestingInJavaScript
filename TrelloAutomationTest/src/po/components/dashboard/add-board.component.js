const BaseComponent = require("../common/base.component");

class AddBoardComponent extends BaseComponent {
    constructor() {
        super('form')
    }
    get input () {
        return this.rootEl.$("//input[@data-testid='create-board-title-input']");
    }
    get createButton () {
        return $("//button[text()='Create']");
    }
    get upgradeWorkspaceButton () {
        return $("//button[text()='Upgrade Workspace']");
    }

}

module.exports = AddBoardComponent;