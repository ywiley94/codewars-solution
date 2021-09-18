function descendingOrder(n){
    //...
    
    let newStr = n.toString()
    let finalStr = +newStr.split('').sort((a,b)=>b-a).join('');
    return finalStr
  
  }