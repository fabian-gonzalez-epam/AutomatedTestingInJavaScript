const Header = require('./common/header.component');
const SideMenu = require('./common/side-menu.component');
const LoginForm = require('./login/login-form.component');
const ErrorBox = require('./login/error-box.component');
const BoardsMenu = require('./dashboard/boards-menu.component');
const AddBoard = require('./dashboard/add-board.component');
const BoardCanvas = require('./board/board-canvas.component');
const UsernameForm = require('./profile/username-form.component');

module.exports = {
    LoginForm,
    ErrorBox,
    BoardsMenu,
    Header,
    AddBoard,
    SideMenu,
    BoardCanvas,
    UsernameForm
}