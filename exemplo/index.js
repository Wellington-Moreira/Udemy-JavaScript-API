//Importing express
const express = require ('express')
const userRouter = require('./src/routes/user')
const personRouter = require('./src/routes/person')
const database = require('./src/database')

const app = express()

const port = 3000

//Middleware to allow Express reads the requisition body as a JSON
app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/person', personRouter)

database.db
.sync({force: false})
.then((_) => {
    app.listen(port, () =>{
        console.log('server running on port ' + port)
    })
})
.catch((e) => {
    console.error(`Não foi possível conectar com o banco: ${e}`)
})



