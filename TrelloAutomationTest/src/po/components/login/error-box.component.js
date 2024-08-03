const BaseComponent = require('../common/base.component');

class ErrorBoxComponent extends BaseComponent {
    constructor() {
        super("//section[@data-testid='form-error']");
    }
    get message() {
        return this.rootEl;
    }
    get message_text() {
        return this.rootEl.getText();
    }
}

module.exports = ErrorBoxComponent;
