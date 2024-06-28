const Interactions = require("../actions/interactions");
const Interrogations = require("../actions/interrogations");

class BaseActor {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.interaction = new Interactions()
        this.interrogation = new Interrogations()
    }

    login() {
        this.interaction.login(this.username, this.password);
    }
    checkIfEnter() {
        return this.interrogation.checkIfEnter()
    }
    checkIfNoEnter() {
        return this.interrogation.checkIfNoEnter()
    }
    

}

module.exports = BaseActor;