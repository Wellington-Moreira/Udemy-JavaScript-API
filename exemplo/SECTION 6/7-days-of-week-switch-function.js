//Make a program that a function reads a number from 1 to 7 and using a switch case structure, returns the respective day of the week

function daysOfTheWeek (number){
    switch (number){
        case 1:
            return "Sunday"
            break;

        case 2:
            return "Monday"
            break;

        case 3:
            return "Tuesday"
            break;

        case 4:
            return "Wednesday"
            break;

        case 5:
            return "Thursday"
            break;

        case 6: 
            return "Friday"
            break;

        case 7:
            return "Saturday"
            break;

        default:
            return "Invalid number!"
    }
}

console.log(daysOfTheWeek(8))