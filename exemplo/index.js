//Importing express
const express = require ('express')
const router = require('./routes/functions')

const app = express()

const port = 3000

//Middleware to allow Express reads the requisition body as a JSON
app.use(express.json())

app.use('/api/v1/user', router)

app.listen(port, () =>{
    console.log('server running on port ' + port)
})

