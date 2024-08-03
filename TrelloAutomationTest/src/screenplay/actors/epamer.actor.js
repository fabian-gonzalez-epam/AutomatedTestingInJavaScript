const BaseActor = require('../actors/base.actor');
const Interactions = require('../actions/interactions');
const Interrogations = require('../actions/interrogations');

class EpamerActor extends BaseActor {
    constructor() {
        super('fabian_gonzalez@epam.com', 'AFmt&!UGeY6aQ#');
        //this.interaction = new Interactions()
        //this.interrogation = new Interrogations()
    }

    async addBoard(name) {
        await this.interaction.addBoard(name);
    }
    async changeProfileName(name) {
        await this.interaction.changeProfileName(name);
    }

    async checkBoardExist(board_name) {
        return await this.interrogation.checkBoardExist(board_name);
    }
    async checkUpgradeButtonExist() {
        return await this.interrogation.checkUpgradeButtonExist();
    }
    async checkSuccessLabel() {
        return await this.interrogation.checkSuccessLabel();
    }
    async checkErrorLabel() {
        return await this.interrogation.checkErrorLabel();
    }
}

module.exports = EpamerActor;
