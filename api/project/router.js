const Projects = require('./model')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Projects.find()
        .then(projs => {    
            // Attempts at converting 0/1 to false/true
            // res.projectCompleted = !!res.projectCompleted     
            // Boolean(res.projectCompleted)
            // I'm actually very interested in how this is accomplished. I would greatly appreciate if my reviewer left a solution for this in my feedback!
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