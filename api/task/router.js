const Tasks = require('./model')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Tasks.find()
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const newTask = req.body
    Tasks.add(newTask)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

module.exports = router
