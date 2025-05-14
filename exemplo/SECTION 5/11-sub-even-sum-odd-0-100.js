//Make a program that iterates from 0 to 100, shows tue subtraction of even numbers, and sum the odds

let sum = 0
let subtraction = 0

for (let i= 0; i <= 100; i = i+2){
    subtraction = subtraction - i
}

for (let i = 1; i <= 100; i = i+2){
    sum = sum + i
}

console.log("The subtraction of even numbers are: " + subtraction)
console.log("The sum of odds numbers are: " + sum)
