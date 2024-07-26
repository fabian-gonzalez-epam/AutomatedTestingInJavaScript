const BasePage = require("./base.page");
const {BoardsMenu, Header, SideMenu, UsernameForm} = require('../components')

class ProfilePage extends BasePage {
    
    constructor() {
        super('https://trello.com/b/667f071e12780f21b2713d28');
        this.boardsMenu = new BoardsMenu();
        this.header = new Header();
        this.sideMenu = new SideMenu();
        this.usernameForm = new UsernameForm();
    }
}

module.exports = ProfilePage;