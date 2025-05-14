//Make a program that given an math operation (+,-,/,*) and two numbers, it does the math required.

const operation = "+"
const number1 = 5
const number2 = 9
let final_number

if (operation == "+"){
    final_number = number1 + number2
} else if (operation == "-"){
    final_number = number1 - number2
} else if (operation == "*"){
    final_number = number1 * number2
} else if (operation == "/"){
    final_number = number1 / number2
} else {
    final_number = "Invalid math sign"
}

console.log(final_number)