// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      //loop thru arr
      return args.reduce((acc, cur) => {
        if(acc < cur) {
          return acc
        } else return cur
      })
      //check each ele against the next
      //if the current is less than the next
      //return current
    }
  }
  //array of numbers. both positive and negative
  // return the smallest number from the array 
  // [1,2,3,4,5] -> 1 || [10,20,4,1,-9,-45,0] -> -45