// Given a list of integers, 
// determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    //enter code here
   let emptyArr = []
   if(array == 0) {
     emptyArr.push(0)
   }
    let sum = array.reduce((a,c) => a+c, 0)
    if(sum % 2 == 0) {
      return 'even'
    } else {
      return 'odd'
    }
 
 }