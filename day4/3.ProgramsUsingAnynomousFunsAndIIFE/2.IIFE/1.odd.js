/*
Problem:Print odd numbers in an array 
*/
(function (array) { 
    var oddarray=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!==0){
            try{
				console.log(array[i]);
			}catch(err){
			console.log("Error Occured");
            }
        }
    }
    
})(array = [1,2,3,4,5,6,7,8,9]);

/*output : 
1
3
5
7
9
*/
