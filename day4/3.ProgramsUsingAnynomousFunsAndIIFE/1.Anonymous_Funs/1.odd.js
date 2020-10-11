/*
Problem:Print odd numbers in an array 
*/
lat PrintOdd = function(array) { 
    try{
		if(typeof(array)!=='object') throw "Input is not an array"
		else console.log(oddArray(array));
	}catch(err){
		console.log(err);
	}
	function oddArray(array){//this function takes an array and returns a Newarray contaning odd elements from input array
			let oddarray=[];
			for(let i=0;i<array.length;i++){
				if(array[i]%2!=0){
					oddarray.push(array[i]);
				}
			} return oddarray;
		}
		
}
let arr = [1,2,3,4,5,6,7,8,9]
let notarr = "prasad"

PrintOdd(arr);//[ 1, 3, 5, 7, 9 ]

PrintOdd(notarr);//Input is not an array
