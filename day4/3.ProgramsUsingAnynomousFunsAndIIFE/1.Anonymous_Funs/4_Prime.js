/*
Return all the prime numbers in an array
*/

let prime = function (array){ 

for(let i=0;i<array.length;i++){
    if (isPrime(array[i])){//prints the primes retured from isPrime function
 try{
		console.log(array[i]);
	}catch(err){
		console.log("Error has been occured");
	}
 }
} 
//Returns true if a number is prime
function isPrime(n){//this function will check wether the number is prime or not     
   if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }else{
    for(let x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
 		 }
	}
}
let array = [1,8,7,5,6,3,7,6,3,7];
prime(array);
