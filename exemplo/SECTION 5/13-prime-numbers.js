//Make a program that iterates until a typed number, and counts how many prime numbers there was

const max_number = 15789
let counter = 0

for (let i = 2; i <= max_number; i++){
    let is_prime = true
    for (let j = 2; j <= Math.sqrt(i); j++){
        if (i % j === 0){
            is_prime = false
            break
        }    

     }
     if (is_prime == true){
        console.log(i + " is a prime number.")
        counter++
    }
}

console.log("There are " + counter + " prime numbers in that range.")