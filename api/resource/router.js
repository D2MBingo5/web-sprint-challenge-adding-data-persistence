const Resources = require('./model')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Resources.find()
        .then(reso => {
            res.json(reso)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body
    Resources.add(resource)
        .then(reso => {
            res.status(201).json(reso)
        })
        .catch(next)
})

module.exports = router