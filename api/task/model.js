const db = require('../../data/dbConfig')

function find() {
    return db('tasks as t')
    .select('t.*')
    .groupBy('t.task_id')
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