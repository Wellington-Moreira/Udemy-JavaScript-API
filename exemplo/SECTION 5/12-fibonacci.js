//Make a program that prints the fibonacci sequence until the typed number

const element_number = 39
let element1 = 0
let element2 = 1
let element3 = 0

for (let i = 1; i <= element_number; i ++){
    console.log("The " + i + " element of fibonacci sequence is " + element2)
    element3 = element1
    element1 = element2
    element2 = element2 + element3
}