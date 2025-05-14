//Make a program that displays the biggest among 3 numbers

const number1 = 22
const number2 = 10
const number3 = 10
let biggest = "The bigger number is repeated"

if (number1 > number2 && number1 > number3){
    biggest = number1
} else if (number2 > number3 && number2 > number1){
    biggest = number2
} else if (number3 > number1 && number3 > number2){
    biggest = number3
}

console.log(biggest)