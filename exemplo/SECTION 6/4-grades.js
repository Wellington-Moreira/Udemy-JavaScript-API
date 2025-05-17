//Make a program that read an array of grades, display the higher, lowest and average grades. Print wich students got the higher and lower
//averages and single grades

let grades_room_101 = [
    [6, 5], [2, 9], [7, 5.5], [7.2, 9.8]
]
let sum = 0
let single_average = 0

// console.log(grades_room_101)

//Saving the average at the end of each student array
grades_room_101.forEach((grades, index) =>{
    // console.log(number)
    for (let i = 0; i < grades.length; i++){
        console.log("Grade ", i, " from array ", index, " grade is: ", grades[i])
    
    }
})