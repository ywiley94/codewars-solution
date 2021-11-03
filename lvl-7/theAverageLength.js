// Given an array of strings 
// of the same letter type. 
// Return a new array, which 
// will differ in that the length 
// of each element is equal to the 
// average length of the elements of the previous array.

// Examples
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

function averageLength(a) { 
    var arr=[];
    var avg=0;
    for (var i=0; i<a.length; ++i)
      avg+=a[i].length; 
    avg/=a.length;
    avg=Math.round(avg);
    for (var i=0; i<a.length; ++i)
    {
      var c='';
      for (var j=0; j<avg; ++j)
        c+=a[i][0];
      arr.push(c);  
    }
    return arr;
  }