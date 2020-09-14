/*
Rotate an array by k times and return the rotated array
*/
var RotateArray = function (array,ktimes) { 

         function arrayRotate(arr) { 
            //This function will return the rotated array
            arr.unshift(arr.pop()); 
            return arr; 
        } 
for(var i=0;i<ktimes;i++){
 //sends the input array to the function 'arrayRotate' ktimes
 array = arrayRotate(array);
}
 try{
     console.log(array);
}catch(err){
    console.log("Error Occured")
}
}
array = [1, 2, 3, 4];
ktimes = 3;
RotateArray(array,ktimes)


/*output : 
[ 2, 3, 4, 1 ]
*/