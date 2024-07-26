const BaseActor = require("./base.actor");

class NonEpamerActor extends BaseActor {
    constructor() {
        super("fabian@epam.com", "1234")
    }
}

module.exports = NonEpamerActor;