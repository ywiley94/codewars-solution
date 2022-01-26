// Complete the function that accepts a string parameter, 
// and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str){
    var complete = []
    var stuff = str.split(' ')
    console.log(stuff)
    for (var i=0; i<stuff.length; i++){
      complete.push(stuff[i].split('').reverse().join(''))
    }
    return complete.join(' ')
  }