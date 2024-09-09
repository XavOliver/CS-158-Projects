function secondsToHours(seconds){ // Made seconds to hours its own function
   const hours = Math.floor(seconds / 3600);
   const formattedHours = hours < 10 ? '0' + hours : hours.toString();
   return formattedHours;
}

function secondsToMinutes(seconds){ // Made seconds to minutes its own function
   const minutes = Math.floor((seconds % 3600) / 60);
   const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
   return formattedMinutes;
}

function secondsToRemainingSeconds(seconds){ // Made seconds to remaining seconds its own function
   const remainingSeconds = seconds % 60;
   const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds.toString();
   return formattedSeconds;
}
 
let hours = secondsToHours(3665); // added a variable to hold the value of secondsToHours
let minutes = secondsToMinutes(3665); // added a variable to hold the value of secondsToMinutes
let leftoverSeconds = secondsToRemainingSeconds(3665); // added a variable to hold the value of secondsToRemainingSeconds
console.log(`${hours}:${minutes}:${leftoverSeconds}`); // added a string to print the variables in the correct format

// The refactored code is easier to maintain since the each part of the larger function is in its own chunk, so nothing in one function breaks the other ones.
// For something this short, I do think this is unnecessary, since the original larger function is already simple and easy to read and understand.