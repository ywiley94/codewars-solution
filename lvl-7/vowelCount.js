function getCount(str) {
    var vowelsCounter = 0;
    str = str.toLowerCase();
    let vowels = ["a","e","i","o","u"];
    for (let i of str) {
      if (vowels.includes(i)) vowelsCounter++;
    }
    return vowelsCounter;
  }