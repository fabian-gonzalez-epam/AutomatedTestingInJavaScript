const BaseComponent = require("../common/base.component");

class ErrorBoxComponent extends BaseComponent {
    constructor() {
        super('span.css-xal9c7')
    }
    get message () {
        return this.rootEl;
    }
    get message_text () {
        return this.rootEl.getText();
    }

}

module.exports = ErrorBoxComponent;