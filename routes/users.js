const express = require('express')
const router = express.Router()
const Users = require('../models/users')


router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id)
        res.json(users)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const users = new Users({name: req.body.name})

    try {
        const a1 = await users.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id)
        users.sub = req.body.sub
        const a1 = await users.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router
