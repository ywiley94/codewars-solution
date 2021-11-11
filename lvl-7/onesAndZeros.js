// Given an array of ones and zeroes, 
// convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 
// which is the binary representation of 1.

const binaryArrayToNumber = arr => {
    // your code
    let result = arr.join('')
    return parseInt(result, 2)
  };