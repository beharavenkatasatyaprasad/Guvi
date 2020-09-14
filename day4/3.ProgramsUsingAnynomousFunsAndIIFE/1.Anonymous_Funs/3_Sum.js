/*
Sum of all numbers in an array
*/
var Sum = function(array) { 
	//This function will return sum of all the integers in an array
	
    var sum=0;
    for(var i=0;i<array.length;i++){
        try{
			
			if(typeof(array[i]) !== 'number')throw 'There are NaN(s) in the given array at position(s) '+ i +" " +',but I can give the sum of remaining elements' 
			
		}catch(err){
			console.log(err);
		}finally{
		    if(typeof(array[i]) === 'number')
			sum = sum + array[i]
			
		}
		
    }
    return "sum: " + sum;
}
var array = [1,2,3,4,5,6,7,8,9]
console.log(Sum(array));

/*output : 
Sum: 45
*/
var array2 =[1,2,3,4,"satya prasad",6,7,8,9]
console.log(Sum(array2));
/*
There are NaN(s) in the given array at positions 4 ,but I can give the sum of remaining elements
sum: 40
*/