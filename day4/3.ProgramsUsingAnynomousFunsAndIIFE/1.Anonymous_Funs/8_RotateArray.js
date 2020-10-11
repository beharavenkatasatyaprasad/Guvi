/*
Rotate an array by k times and return the rotated array
*/
var RotateArray = function (array,k) { 

         function arrayRotate(arr) { 
            //This function will return the rotated array
            arr.unshift(arr.pop()); 
            return arr; 
        } 
for(let i=0;i<k;i++){//sends the input array to the function 'arrayRotate' ktimes
 array = arrayRotate(array);
}
 try{
     console.log(array);
}catch(err){
    console.log("Error has been Occured")
}
}
array = [0, 1, 2, 3];
ktimes = 8;
RotateArray(array,ktimes)

