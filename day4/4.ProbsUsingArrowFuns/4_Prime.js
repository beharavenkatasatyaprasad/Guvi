/*
Return all the prime numbers in an array
*/

var Prime = (array) => { 
var PrimeArray = [];
for(var i=0;i<array.length;i++){
    if (isPrime(array[i]))
 {
	//push the primes retured from isPrime function to a New array and return
 try{
		PrimeArray.push(array[i]);
	}catch(err){
		return("Error occured")
	}
 } 
} 
return PrimeArray;
function isPrime(n)
{   
//this function will check wether the number is prime or not    
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
}
var array = [1,2,3,4,5,6,7,8,9];
console.log(Prime(array))

/*output : 
[ 2, 3, 5, 7 ]
*/