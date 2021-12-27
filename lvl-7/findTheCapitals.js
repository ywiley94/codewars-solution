// Write a function that takes a single string (word) 
// as argument. The function must return an ordered list 
// containing the indexes of all capital letters in the string.


var capitals = function (word) {
	// Write your code here
  	var indexArray =[];
	for(var i = 0; i < word.length; i++) {
	  if(word[i] === word[i].toUpperCase()){
	    indexArray.push(i)
	  }
	}
	return indexArray
};