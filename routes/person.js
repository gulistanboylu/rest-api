const express = require('express')
const router = express.Router()
const personController = require('../controllers/person-controller')

router.get('/', async (req, res, next) => {
    res.send('Person services end point')
})

// Add new person to db
router.post('/', personController.addPersonAction)

// Get list of persons
router.get('/list', personController.findAllOff)

// Get person by id
router.get('/:id', personController.getPersonAction)

// Update person by id
router.put('/:id', personController.personUpdateAction)

// Delete person by id
router.delete('/:id', personController.deletePersonAction)

module.exports = router
