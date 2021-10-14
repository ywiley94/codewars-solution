// You are given an odd-length array of integers, 
// in which all of them are the same, except for 
// one single number.
// Complete the method which 
// accepts such an array, and 
// returns that single different number.

// The input array will always be valid! (odd-length >= 3)


function stray(numbers){
    //find unique numbers and set their count to 0
    const map = new Map(Array.from(new Set(numbers)).map(v=>([v,0])));
    
    //take first three numbers from numbers array
    return Array.from(
        numbers.slice(0,3).reduce((a,c)=>{
          //update the count
          return map.set(c, map.get(c) + 1);
        }, map)
        //find the number with a count of 0 or 1
    ).find(([,v])=>v<=1)[0];
  }
  