const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

router.get('/', async (req, res, next) => {
    res.json(await PersonService.findAll())
})

router.get('/all', async (req, res, next) => {
    const people = await PersonService.findAll()
    res.json(people)
})

router.get('/:id', async (req, res, next) => {
    const person = await PersonService.find(req.params.id)

    res.json(person)
})

router.put('/:id', async (req, res, next) => {
    const person = await PersonService.update(req.params.id)
    res.json(person)
})

router.post('/', async (req, res, next) => {
    const person = await PersonService.add(req.body)
    res.json(person)
})

router.delete('/:id', async (req, res, next) => {
    await PersonService.del(req.params.id)

    res.send('ok!')
})

module.exports = router
