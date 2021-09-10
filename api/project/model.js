const db = require('../../data/dbConfig')

function find() {
    return db('projects as p')
    .select('p.*')
    .groupBy('p.project_id')
}

function add(project) {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects')
            .where('project_id', project_id)
            .first()
        })
}

module.exports = {
    find,
    add
}
