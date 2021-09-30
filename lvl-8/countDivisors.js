//Count the number of divisors of a positive integer n.


function getDivisorsCnt(n){
    // todo
  var divisors = 0;
    mod = n;
    while (mod > 0){
      if(n % mod === 0){
        divisors++;
      }
      mod--;
    }
    return divisors;
}