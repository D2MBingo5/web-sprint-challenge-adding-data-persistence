const db = require('../../data/dbConfig')

function find() {
    return db('projects as p')
    .select('p.*')
    .groupBy('p.project_id')
}

module.exports = {
    find
}
