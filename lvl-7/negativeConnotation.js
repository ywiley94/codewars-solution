// Looking at the first letter 
// of each word (case insensitive-"A" 
// and "a" should be treated the same), 
// you need to determine whether it falls 
// into the positive/first half of the alphabet 
// ("a"-"m") or the negative/second half ("n"-"z").

function connotation(str) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const mid = alphabet.length / 2;
    const words = str.split(' ');
    let positive = 0;
    let neagative = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i][0]) {
        let currenntIndex = alphabet.lastIndexOf(words[i][0].toUpperCase());
        if (currenntIndex >= mid) {
          neagative += 1;
        } else {
          positive += 1;
        }
      }
    }
    return positive >= neagative ? true : false
  }