// It's the academic year's end, 
// fateful moment of your school report. 
// The averages must be calculated.
// All the students come to you and 
// entreat you to calculate their average 
// for them. Easy ! You just need to write a script.

// Return the average of the given array 
// rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
    let average = 0
  
    //TODO : calculate the downward rounded average of the marks array
    for(var i=0; i<marks.length; i++) {
    average += marks[i]
    }
    return Math.floor(average / marks.length) 
  }