/* Description:
We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:
0 1 3 6 10 15 21 28 36 45 55 ....
which is created by
0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..
Input:
LastNumber
Output:
series and result
Example:
Input:
> 6
Output:
    0+1+2+3+4+5+6 = 21
Input:
> -15
Output:
    -15<0
Input:
> 0
Output:
    0=0 */
    var SequenceSum = (function() {
        function SequenceSum() {}
      
        SequenceSum.showSequence = function(count) {
          let sum = 0;
          let input = '';
          if (count === 0) return '0=0'
          if (count < 0) return `${count}<0`
          for(let i = 0; i <= count; i++){
            if(i == count){
              input += String(i);
            }else {
            input += String(i) + '+';
            }
            sum = sum + i;
          }
          return input + ' = ' + sum;
        };
        return SequenceSum;
      
      })();