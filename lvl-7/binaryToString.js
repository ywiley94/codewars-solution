// Write a script that takes an array 
// of possible passwords and a string 
// of binary representing the possible 
// password. Convert the binary to a 
// string and compare to the password 
// array. If the password is found, return 
// the password string, else return false;

function decodePass(a,s) {
    const password = String.fromCharCode( ...s.split(" ").map( s => Number.parseInt(s,2) ) );
    return a.includes(password) && password ;
  }