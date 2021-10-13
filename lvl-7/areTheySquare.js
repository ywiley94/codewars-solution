// Write a function that checks 
// whether all elements in an 
// array are square numbers. 
// The function should be able 
// to take any number of array elements.

let isSquare = function(arr){
    return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
  }