const BaseComponent = require("../common/base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('nav#header')
    }
    get addButton () {
        return this.rootEl.$("//button[@data-testid='header-create-menu-button']");
    }
    
    selection(name) {
        const selectors = {
            create: "//span[text()='Create board']",
            template: "//span[text()='Start with a template']"
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

}

module.exports = HeaderComponent;