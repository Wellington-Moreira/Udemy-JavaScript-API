// Make a program that recives the height of 5 people, then calculates the average

let heights = []

heights.push(1.3)
heights.push(1.5)
heights.push(1.6)
heights.push(1.8)
heights.push(2)
heights.push(1.64)

console.log(heights)

let sum_array = 0

heights.forEach(sum => {
    sum_array += sum
})

console.log("The average of all heights is " , sum_array/heights.length)
