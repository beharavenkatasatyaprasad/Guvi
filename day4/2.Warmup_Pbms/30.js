/*
Problem:
Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
*/
function getPrimes(nPrimes, startAt){
 var i = startAt;
 let n = 0;
 while(n < nPrimes) {
 if (NumisPrime(i)) {
 console.log(n, "→" , i);
 n++;
 }
 i++;
 }
}

function NumisPrime(k){// Returns true if a number is prime   
  if (k==1){
    return false;
  }
  else if(k == 2){
    return true;
  }else{
    for(let x = 2; x < k; x++){
      if(k % x === 0){
        return false;
      }
    }
    return true;  
  }
}

getPrimes(10, 100)
/*o/p:
0 '→' 101

1 '→' 103

2 '→' 107

3 '→' 109

4 '→' 113

5 '→' 127

6 '→' 131

7 '→' 137

8 '→' 139

9 '→' 149
*/
