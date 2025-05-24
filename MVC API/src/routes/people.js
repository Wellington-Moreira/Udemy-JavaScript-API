const express = require("express");
const ControllerPeople = require("../controllers/people");

//The aplication will be using the controllers, and initializing it
const controller = new ControllerPeople()

//Express will initialize a new router to be able to use the methots
const router = express.Router();

//---------------------------ENDPOINTS-----------------------------------------
router.get('/api/v1/names', controller.GetAll)
router.get('/api/v1/names/:id', controller.GetOne)
router.post('/api/v1/names', controller.Add)
router.put('/api/v1/names/:id', controller.Edit)
router.delete('/api/v1/names/:id', controller.Delete)

module.exports = router;