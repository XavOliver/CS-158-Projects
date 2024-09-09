let array = [3, 7, 2, 8, 5]; //changed variable x to a clearer name, array
let currentNumber = array[0]; //changed variable y to a clearer name, currentNumber

for (let currentIndex = 0; currentIndex < array.length; currentIndex++) { //corrected .length function to be for the array
    if (array[currentIndex] > currentNumber) { //changed variable z to a clearer name, currentIndex
        currentNumber = array[currentIndex];
    }
}
 
console.log(currentNumber); 
