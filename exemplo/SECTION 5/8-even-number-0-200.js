//Make a program that counts how many even numbers there are between 0 and 200

let count = 0

for (let i = 2; i <= 200 ; i = i + 2){
    count = count + 1
}

console.log("Between 0 and 200 there are " + count + " even numbers.")