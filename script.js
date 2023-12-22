let charToLowerCase = (char) => {
   let result = char.toLowerCase();
    return result;
}
// Here in the below arrow function i have used split() and join() which i have learnt through to internet to split the word into characters and join them back again after the operation is done.
let wordToLowerCase = (word) => {
    let charSplit = word.split("");

    let operation = charSplit.map((char) => charToLowerCase(char));

    let result = operation.join("");

    return result;

}

let arrayToLowerCase = (array) => {
    let result = array.map((word) => wordToLowerCase(word));
    return result;
}

console.log(arrayToLowerCase( ["MA", "SA", "I", "SCH", "OOL"]));