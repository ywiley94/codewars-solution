

function dontGiveMeFive(start, end)
{
  let arr = []
  for(var i = start; i <= end; i++) {
    let string = i.toString()
    
    if(!string.includes('5')) {
      arr.push(i)
    }
    
  }
  return arr.length;
}