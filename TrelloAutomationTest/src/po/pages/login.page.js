const BasePage = require("./base.page");
const {LoginForm, ErrorBox} = require('./../components')

class LoginPage extends BasePage {
    
    constructor() {
        super('https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D')
        this.loginForm = new LoginForm();
        this.errorBox = new ErrorBox();
    }

}

module.exports = LoginPage;