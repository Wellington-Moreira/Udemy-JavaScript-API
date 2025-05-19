const {
    sum,
    subtract,
    multiplies,
    divide } = require("../services/functions");

function apiCalculate (req, res) {
    const {num1, num2, signal} = req.body
    let result = 0

    switch (signal){

        case '+':
            result = sum(num1, num2)
            res.send({result})
            break;
        case '-':
            result = subtract(num1, num2)
            res.send({result})
            break;
        case '*':
            result = multiplies(num1, num2)
            res.send({result})
            break;
        case '/':
            result = divide(num1, num2)
            res.send({result})
            break;
        
        default:
            res.send({error:'Invalid option'})
    }
}

function apiSum (req, res) {
    const {num1, num2} = req.body
    const result = sum (num1, num2)
    res.send({result})
}
function apiSubtract (req, res) {
    const {num1, num2} = req.body
    const result = subtract (num1, num2)
    res.send({result})
}
function apiDivide (req, res) {
    const {num1, num2} = req.body
    const result = divide (num1, num2)
    res.send({result})
}
function apiMultiplies (req, res) {
    const {num1, num2} = req.body
    const result = multiplies (num1, num2)
    res.send({result})
}
module.exports = {
    apiCalculate,
    apiSum,
    apiSubtract,
    apiDivide,
    apiMultiplies}