function sum (num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        throw new Error("Please, insert only numbers");
    }
    return (num1 + num2)
}
function subtract (num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        throw new Error("Please, insert only numbers");
    }
    return (num1 - num2)
}
function multiplies (num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        throw new Error("Please, insert only numbers");
    }
    return (num1 * num2)
}
function divide (num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        throw new Error("Please, insert only numbers");
    }
    if (num2 === 0){
        throw new Error ("Division by 0 not accepted")
    }
    return (num1 / num2)
}

module.exports = {sum, subtract, multiplies,divide}