//Make a program that fills an array with 15 random numbers

let numbers = []

for (let i = 1; i <= 15; i++){
    numbers.push(Math.floor(Math.random() * 101))
}

console.log(numbers)