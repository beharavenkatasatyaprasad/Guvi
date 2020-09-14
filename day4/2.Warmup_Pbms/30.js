/*
Problem:
Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
*/

getPrimes(10, 100)
function getPrimes(nPrimes, startAt)
{
 var i = startAt;
 n = 0;
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, "→" , i);
 n++;
 }
 
 i++;
 }
}

// Returns true if a number is prime
function isPrime(n)
{   
    
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

/*output:
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