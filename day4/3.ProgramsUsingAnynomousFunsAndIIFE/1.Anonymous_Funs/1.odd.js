/*
Problem:Print odd numbers in an array 
*/
var PrintOdd = function(array) { 
    try{
		if(typeof(array)!=='object') throw "Input is not an array"
		else console.log(oddArray(array));
	}catch(err){
		console.log(err);
	}
	
         
		function oddArray(array){
			//this function takes an array and returns a Newarray contaning odd elements from input array
			var oddarray=[];
			for(var i=0;i<array.length;i++){
				if(array[i]%2!=0){
				oddarray.push(array[i])
				}
			} return oddarray;
		}
		
}
var array = [1,2,3,4,5,6,7,8,9]
var notarray = "satya"

PrintOdd(array);//[ 1, 3, 5, 7, 9 ]

PrintOdd(notarray);//Input is not an array
