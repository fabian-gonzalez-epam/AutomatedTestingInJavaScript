const BaseActor = require("../actors/base.actor");
const Interactions = require("../actions/interactions");
const Interrogations = require("../actions/interrogations");

class EpamerActor extends BaseActor {
    constructor() {
        super("fabian_gonzalez@epam.com", "AFmt&!UGeY6aQ#")
        //this.interaction = new Interactions()
        //this.interrogation = new Interrogations()
    }
    
    async checkBoardExist() {
        await this.interrogation.checkBoardExist();
    }
    async addBoard() {
        await this.interaction.addBoard();
    }
}

module.exports = EpamerActor;