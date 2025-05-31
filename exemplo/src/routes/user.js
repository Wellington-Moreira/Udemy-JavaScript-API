const ApiUser = require ('../api/user')
const express = require('express');

const router = express.Router();

router.get('/', ApiUser.findAll)
router.get('/:id', ApiUser.findById)
// router.post('/', ApiUser.create)
router.put('/:id', ApiUser.update)
router.delete('/:id', ApiUser.delete)

module.exports = router;