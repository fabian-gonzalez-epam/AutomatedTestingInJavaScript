const DashboardPage = require('./dashboard.page');
const LoginPage = require('./login.page');
const BoardPage = require('./board.page');
const ProfilePage = require('./profile.page');

function pages(name){
    const items = {
        dashboard: new DashboardPage(),
        login: new LoginPage(),
        board: new BoardPage(),
        profile: new ProfilePage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    LoginPage,
    BoardPage,
    ProfilePage,
    pages
}