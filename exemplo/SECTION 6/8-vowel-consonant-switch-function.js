//Make a program that recives an letter input, and returns if it's an vowel or consonant

function typeLetter (letter){
    switch (letter){
        case "a":
            return "Vowel"
            break;
        case "e":
            return "Vowel"
            break;
        case "i":
            return "Vowel"
            break;
        case "o":
            return "Vowel"
            break;
        case "u":
            return "Vowel"
            break;
        default:
            return "Consonant"        
    }
}

console.log(typeLetter("f"))