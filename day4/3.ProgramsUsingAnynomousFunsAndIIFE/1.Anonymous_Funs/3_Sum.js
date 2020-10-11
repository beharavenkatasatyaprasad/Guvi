/*
Sum of all numbers in an array
*/
var sum = function(arr) { //This function will return sum of all the integers in an array
    let sum=0;
    for(let i=0;i<arr.length;i++){
        try{
		if(typeof(arr[i]) !== 'number')throw 'There are NaN(s) in the given array at position(s) '+ i +" " +',but I can give the sum of remaining elements' 
			
		}catch(err){
			console.log(err);
		}finally{
		    if(typeof(arr[i]) === 'number')
			sum = sum + arr[i]
			
		}
		
    }
    return "sum: " + sum;
}
var array = [1,2,3,4,5,6,7,8,9]
console.log(sum(array));

/*output : 
Sum: 45
*/
var array2 =[1,2,3,4,"prasad",6,7,8,9]
console.log(sum(array2));
/*
There are NaN(s) in the given array at positions 4 ,but I can give the sum of remaining elements
sum: 40
*/
