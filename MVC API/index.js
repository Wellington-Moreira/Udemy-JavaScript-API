const express = require("express");
const routers = require("./src/routes/people")

//The aplication will be started with express
const app = express();

//Express will read the JSON file that comes in the body of the requisition
app.use(express.json());

//The aplication will be using some routers
app.use(routers);

//The aplication will be listening to port 3000
app.listen(3000, () =>{
    console.log("Service running on port 3000")
})