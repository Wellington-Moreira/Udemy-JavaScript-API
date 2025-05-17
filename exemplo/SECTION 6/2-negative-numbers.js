//Make a program that read 10 numbers, and verifies how many of them are negatives

let numbers = []

numbers.push(10)
numbers.push(7)
numbers.push(-30)
numbers.push(4)
numbers.push(10)
numbers.push(77)
numbers.push(-10)
numbers.push(10)
numbers.push(-5)
numbers.push(-33)

console.log(numbers)

let counter = 0

numbers.forEach(num => {
    if (num < 0){
        counter ++
    }
})

console.log("There are " , counter, " negative numbers in this array.")