const db = require('../../data/dbConfig')

function find() {
    return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
    .orderBy('t.task_id')
}

function add(task) {
    return db('tasks').insert(task)
        .then(([task_id]) => {
            return db('tasks')
            .where('task_id', task_id)
            .first()
        })
}

module.exports = {
    find,
    add
}