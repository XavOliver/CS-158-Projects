function math(number1, number2, operator) { // Changed function name to math, abc to number1, def to number2, ghi to operator
    let finalValue; // Changed jkl to finalValue
   
    switch(operator) {
          case '+': 
              finalValue = number1 + number2;
              break;
          case '-':
              finalValue = number1 - number2;
              break;
          case '*':
              finalValue = number1 * number2;
              break;
          case '/':
              finalValue = number1 / number2; 
              break;
          default:
              finalValue = "No operator found!";
              break;
      }
      return finalValue;
  }
   
  let functionValue = math(68, 67, '*'); // added a variable to hold the value of the function
  console.log(functionValue); // added a string to print the value of the function