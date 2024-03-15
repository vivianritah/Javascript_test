
// Sum and Tripple of numbers
function sumAndTriple(x, y) {
    if (x === y) {
        return 3 * (x + y);
    } else {
        return x + y;
    }
}


const number_one= 4;
const number_two = 4;
console.log(`The numbers are: ${number_one}, ${number_two}: Result is: ${sumAndTriple(number_one, number_two)}`);
const number_three = 3;
const number_four = 7;
console.log(`The numbers are: ${number_three}, ${number_four}: Result is: ${sumAndTriple(number_three, number_four)}`);
