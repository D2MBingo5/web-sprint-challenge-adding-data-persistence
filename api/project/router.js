const Projects = require('./model')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Projects.find()
        .then(projs => {
            res.json(projs)
        })
        .catch(next)
})

module.exports = router