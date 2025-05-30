const ApiPerson = require ('../api/person')
const express = require('express');

const router = express.Router();

router.get('/', ApiPerson.findAll)
router.get('/:id', ApiPerson.findById)
router.post('/', ApiPerson.create)
router.put('/:id', ApiPerson.update)
router.delete('/:id', ApiPerson.delete)

module.exports = router;