// Functions class

function somar (num1, num2){
    return num1 + num2
}

//Arrow function
const otherFunction = (num1, num2) => {
    return num1 + num2
}

const result1 = somar(1,2)
const result2 = otherFunction(1,2)
console.log(result1, result2)

//Exporting a function to use in other classes
module.exports = somar