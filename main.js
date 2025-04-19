const reverseSeq = n => {
  // Setup array to tabulate 
 let array = [];
  
  // Setup for loop to iterate from n to 0
  for (let i = n; i > 0; i--) {
    // Push the numbers to the tabulation array
    array.push(i);
  }
  // Return the tabulation array once done iterating
  return array;
};