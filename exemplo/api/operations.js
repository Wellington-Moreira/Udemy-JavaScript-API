const {
    sum,
    subtract,
    multiplies,
    divide } = require("../services/functions");

function apiCalculate (req, res) {
    try{

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
    }  catch (e){
        res.status(500).send({msg: e.message})
    }
}

function apiSum (req, res) {
    try{

        const {num1, num2} = req.body
        const result = sum (num1, num2)
        res.status(200).send({result})
    } catch (e){
        res.status(500).send({msg: e.message})
    }
}
function apiSubtract (req, res) {
    try{
        const {num1, num2} = req.body
        const result = subtract (num1, num2)
        res.send({result})
    }  catch (e){
        res.status(500).send({msg: e.message})
    }
}
function apiDivide (req, res) {
    try{

        const {num1, num2} = req.body
        const result = divide (num1, num2)
        res.send({result})
    } catch (e){
        res.status(500).send({msg: e.message})
    }
}
function apiMultiplies (req, res) {
    try{

        const {num1, num2} = req.body
        const result = multiplies (num1, num2)
        res.send({result})
    } catch (e){
        res.status(500).send({msg: e.message})
    }
}
module.exports = {
    apiCalculate,
    apiSum,
    apiSubtract,
    apiDivide,
    apiMultiplies}