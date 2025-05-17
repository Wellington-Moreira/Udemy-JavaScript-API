//Make a program that reads an int number from 1 to 3 and prints the type og fuel it is.

function fuelType (number) {
    switch (number){

    case 1:
        return "Álcool."
        break;    

    case 2:
        return "Gasolina."
        break;

    case 3:
        return "Diesel."
        break;

    default:
       return "Invalid value." 
    }

}

console.log(fuelType(6))