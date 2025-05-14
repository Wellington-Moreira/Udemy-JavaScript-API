//Make a program that sums all numbers between -30 and 75
const num1 = -30
const num2 = 75
let sum = 0

for (let i = num1; i <= num2; i++){
    sum = sum + i
}

console.log("The sum of all numbers between " + num1 + " and " + num2 + " is: " + sum)