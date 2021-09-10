const db = require('../../data/dbConfig')

function find() {
    return db('resources as r')
    .select('r.*')
    .groupBy('r.resource_id')
}

function add(resource) {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return db('resources')
            .where('resource_id', resource_id)
            .first()
        })
}

module.exports = {
    find,
    add
}
