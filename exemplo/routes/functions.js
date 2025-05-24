const ApiUser = require ('../api/user')
const express = require('express');

const router = express.Router();

router.get('/', ApiUser.findAll)
router.get('/:index', ApiUser.findByIndex)
router.post('/', ApiUser.create)
router.put('/:index', ApiUser.update)
router.delete('/:index', ApiUser.delete)

module.exports = router;