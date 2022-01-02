function minValue(values){
    //your code here
  let newArr = values.filter((a,b) => {
    return values.indexOf(a) === b
  })
  let sorted = newArr.sort((a,b) => a-b)
  let newArr2 = sorted.join('')
  return parseInt(newArr2)
  }