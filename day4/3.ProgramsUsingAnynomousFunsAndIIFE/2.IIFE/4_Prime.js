/*
Return all the prime numbers in an array
*/
(function (array) { 

for(var i=0;i<array.length;i++){
    if (isPrime(array[i]))
 {
 console.log(array[i]);
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
})(array = [1,2,3,4,5,6,7,8,9]);


/* 
Output:
2
3
5
7
*/