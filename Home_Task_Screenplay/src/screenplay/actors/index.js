const EpamerActor = require('./epamer.actor');
const NonEpamerActor = require('./non-epamer.actor');

function actor(name){
    const items = {
        epamer: new EpamerActor(),
        student: new NonEpamerActor()
        
    }
    return items[name.toLowerCase()];
}

module.exports = {
    EpamerActor,
    NonEpamerActor,
    actor
}