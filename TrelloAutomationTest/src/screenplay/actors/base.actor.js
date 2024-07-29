const Interactions = require("../actions/interactions");
const Interrogations = require("../actions/interrogations");


class BaseActor {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.interaction = new Interactions()
        this.interrogation = new Interrogations()
    }

    async login() {
        await this.interaction.login(this.username, this.password);
    }
    
    async checkIfEnter() {
        return await this.interrogation.checkIfEnter()
    }
    async checkIfNoEnter() {
        return await this.interrogation.checkIfNoEnter()
    }
    

}

module.exports = BaseActor;