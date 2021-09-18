function between(start, end) 
{
  
    if (start > end) {
      const arr = new Array(start - end + 1);
      for (let i = 0; i < arr.length; i++, start--) {
        resarrult[i] = start;
      }
      return arr;
    } 
       else 
       {
      const arro = new Array(end-start+1);
         
    for (let j = 0; j < arro.length; j++, start++) 
        {
      arro[j] = start;
    }
          return arro;
    }
  }