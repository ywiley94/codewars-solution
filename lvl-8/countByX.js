// Create a function with two arguments 
// that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of 
// times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
    const result = []
    const limit = x * n
  
    for (let i = 1; i <= limit; i++) {
      if (i % x === 0) result.push(i)
    }
  
    return result
  }