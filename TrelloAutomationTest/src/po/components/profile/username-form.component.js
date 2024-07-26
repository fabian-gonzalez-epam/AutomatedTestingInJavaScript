const BaseComponent = require("../common/base.component");

class UsernameFormComponent extends BaseComponent {
    constructor() {
        super('form.cwNe5VAI66iHYX')
    }
    get input () {
        return this.rootEl.$("input[name='username']");
    }
    get saveButton () {
        return this.rootEl.$("//button[text()='Save']");
    }
    get successLabel () {
        return this.rootEl.$("//span[text()='Saved']");
    }
    get errorLabel () {
        return this.rootEl.$("p#SaveProfileError_Field_username");
    }
    

}

module.exports = UsernameFormComponent;