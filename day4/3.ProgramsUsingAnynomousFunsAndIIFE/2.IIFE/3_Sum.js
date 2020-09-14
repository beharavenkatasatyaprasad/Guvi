/*
Sum of all numbers in an array
*/
(function (array) { 
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum = sum + array[i];
    }
	try{
		console.log("Sum: "+ sum);
	}catch(err){
		console.log("Error Occured");
	}   
    
})(array = [1,2,3,4,5,6,7,8,9]);


/*output : 
Sum: 45
*/