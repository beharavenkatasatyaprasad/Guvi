/*
Problem:Print odd numbers in an array
*/

var numbers = (array) => {
       try{
		if(typeof(array)!=='object') throw array + " is not an array"
		else return oddArray(array);
	}catch(err){
		return err;
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


console.log(numbers([2,4,5,6,7,8,9,10]));//[ 5, 7, 9 ]

console.log(numbers("Satya"));//Satya is not an array