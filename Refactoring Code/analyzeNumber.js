
// split function into two functions

// determine if the number is even or not
function numberEven(number) { // changed varible name to number
    let isEven;
    if (number % 2 == 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    return isEven
}

// determine if the number is prime or not
function numberPrime(number){ // changed variable name to number
    let isPrime = true;
    if (number <= 1) {
    isPrime = false;
    } else if (number === 2) {
    isPrime = true;
    } else {
        for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                isPrime = false;
                break;
            }
        }  
    }
    return isPrime
}

var even = numberEven(29); // added variables to hold the value of the functions
var prime = numberPrime(29);

console.log(even); // added console log statements to print the results of the functions
console.log(prime);