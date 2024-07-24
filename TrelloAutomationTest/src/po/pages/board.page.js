const BasePage = require("./base.page");
const {BoardsMenu, Header, AddBoard, SideMenu, BoardCanvas} = require('../components')

class BoardPage extends BasePage {
    
    constructor() {
        super('https://trello.com/b/667f071e12780f21b2713d28');
        this.boardsMenu = new BoardsMenu();
        this.header = new Header();
        this.addBoard = new AddBoard();
        this.sideMenu = new SideMenu();
        this.canvas = new BoardCanvas();
    }
}

module.exports = BoardPage;