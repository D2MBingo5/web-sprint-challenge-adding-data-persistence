const Projects = require('./model')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Projects.find()
        .then(projs => {
            res.json(projs)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body
    Projects.add(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router