// write a javascript function to split a string and convert it into an array of words

// function
function splitWords(inputString) {
    var wordsArray = inputString.split(/\s+/);
    return wordsArray;
}

var inputString = "My name is Vivian and am in cohort 3";
var wordsArray = splitWords(inputString);
console.log(wordsArray);
