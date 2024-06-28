const BaseComponent = require("../common/base.component");

class BoardsMenuComponent extends BaseComponent {
    constructor() {
        super('div.all-boards')
    }
    get tittle () {
        return this.rootEl.$("//h3[text()='YOUR WORKSPACES']");
    }
    
    board(name) {
        const selectors = {
            board1: "//div[@title='Board 1']",
            board10: "//div[@title='Board 10']"
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
    
}

module.exports = BoardsMenuComponent;