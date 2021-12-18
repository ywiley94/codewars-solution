// Write a function that returns both the minimum 
// and maximum number of the given list/array.

function minMax(arr){
    let newArr = []
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    newArr.push(max)
    newArr.push(min)
    return newArr.sort((a,b) => a-b)
  }