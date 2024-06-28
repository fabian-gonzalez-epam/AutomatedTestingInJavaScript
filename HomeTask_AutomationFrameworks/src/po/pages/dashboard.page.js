const BasePage = require("./base.page");
const {BoardsMenu, Header, AddBoard, SideMenu} = require('./../components')

class DashboardPage extends BasePage {
    
    constructor() {
        super('https://trello.com/u/fabiangonzalez195/boards');
        this.boardsMenu = new BoardsMenu();
        this.header = new Header();
        this.addBoard = new AddBoard();
        this.sideMenu = new SideMenu();
    }
}

module.exports = DashboardPage;