//Importing express
const express = require ('express')

const {
    apiCalculate,
    apiSum,
    apiSubtract,
    apiDivide,
    apiMultiplies } = require('./api/operations')
const port = 3000
const app = express()



//Middleware to allow Express reads the requisition body as a JSON
app.use(express.json())


app.get('/api/:id', (req, res) => {   
    const id = req.params.id
    res.send('Hello World! 2 ' + id)
})

app.post('/', (req, res) => {    
    res.send('Foi post')
})

app.listen(port, () => {
    console.log('servidor rodando na porta ' + port)
})


//-----------------Training with other exerecises-----------------------
//Sum 2 numbers
app.get('/sum', (req, res) => {
    const {num1, num2} = req.query
    res.send('A soma de ' + num1 + ' com ' + num2 + ' é: ' + (Number(num1) + Number(num2)))
})

//Divide 2 numbers
app.get('/divide', (req, res) => {
    const {num1, num2} = req.query
    res.send('A divisão de ' + num1 + ' com ' + num2 + ' é: ' + (Number(num1) / Number(num2)))
})

//Odd/Even number
app.get('/odd-even', (req, res) =>{
    const num1 = req.query.num1

    if (!num1 || isNaN(num1) ){
        res.send('Invalid number typed!')
        return;
    }

    const number1 = Number(num1)

    if (number1 % 2 === 0){
        res.send('The number ' + num1 + ' is a even number.')
    } else {
        res.send('The number ' + num1 + ' is an odd number.')
    }
})

//Conditional calculation
app.get('/calculator', (req, res) =>{
    const {num1, num2, signal} = req.query

    const number1 = Number(num1)
    const number2 = Number(num2)

    switch (signal){
        case '+':
            res.send(number1 + ' ' + signal +  ' ' + number2 + ' = ' + (number1 + number2))
            break;

        case '-':
            res.send(number1 + ' ' + signal +  ' ' + number2 + ' = ' + (number1 - number2))
             break;
             
         case '*':
            res.send(number1 + ' ' + signal +  ' ' + number2 + ' = ' + (number1 * number2))
           break;

        case '/':
            res.send(number1 + ' ' + signal +  ' ' + number2 + ' = ' + (number1 / number2))
            break;
    
        default:
            res.send('Invalid params')
    }
})
// ------------------- End trainig-----------------------

//Class 45
app.post('/sum-post', apiSum)
app.post('/subtract-post', apiSubtract)
app.post('/divide-post', apiDivide)
app.post('/multiplies-post', apiMultiplies)

//---------------------Calculator POST---------------------------
app.post('/calculator-post', apiCalculate)