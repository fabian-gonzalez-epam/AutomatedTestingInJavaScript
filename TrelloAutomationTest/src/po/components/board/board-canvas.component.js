const BaseComponent = require("../common/base.component");

class BoardCanvasComponent extends BaseComponent {
    constructor() {
        super('div.board-canvas')
    }
    get input () {
        return this.rootEl.$("//textarea[@class='oe8RymzptORQ7h']");
    }
    get addListButton () {
        return this.rootEl.$("//button[@data-testid='list-composer-button']");
    }
    get confirmButton () {
        return this.rootEl.$("//button[text()='Add list']");
    }
    
    list(name) {
        const selectors = {
            list1: "//h2[text()='List 1']",
            list2: "//h2[text()='List 2']"
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

}

module.exports = BoardCanvasComponent;