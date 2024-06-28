const DashboardPage = require('./dashboard.page');
const LoginPage = require('./login.page');

function pages(name){
    const items = {
        dashboard: new DashboardPage(),
        login: new LoginPage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    LoginPage,
    pages
}