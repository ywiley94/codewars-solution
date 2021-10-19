// Simple, remove the spaces from the string, 
// then return the resultant string.


function noSpace(x){
    let newArr = x.split(' ')
    let newString = newArr.join('')
    return newString
  }