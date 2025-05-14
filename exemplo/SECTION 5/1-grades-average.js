//Make a program that displays different messages when different ranges of grade averages are calculated!

const nota1 = 7
const nota2 = 8
const nota3 = 4

const sum = nota1 + nota2 + nota3
const average = sum / 3

console.log(average)

if (average >= 0 && average <= 3){
    console.log("Terrible!")
} else if (average > 3 && average <= 7){
    console.log("There's room for improvement")
} else if (average > 7 && average <= 10){
    console.log("Excelent!")
} else {
    console.log("Invalid average!")
}