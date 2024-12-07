const BaseComponent = require("./base.component");

class SideMenu extends BaseComponent {
    constructor() {
        super('ul.zTDLUwAwqU7RSw')
    }
    
    
    board(name) {
        const selectors = {
            board10: "//a[text()='Board 10']",
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

}

module.exports = SideMenu;