const BaseComponent = require("../common/base.component");

class LoginFormComponent extends BaseComponent {
    constructor() {
        super('form#form-login')
    }
    get submitButton () {
        return this.rootEl.$('button#login-submit');
    }

    

    input(name) {
        const selectors = {
            username: 'input#username',
            password: 'input#password'
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = LoginFormComponent;