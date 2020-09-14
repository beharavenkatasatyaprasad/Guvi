/*
Rotate an array by k times and return the rotated array
*/
(function (array,ktimes) { 

        function arrayRotate(arr) { 
            arr.unshift(arr.pop()); 
            return arr; 
        } 
for(var i=0;i<ktimes;i++){
 array = arrayRotate(array);
}
 console.log(array)
})(array = [1, 2, 3, 4],3);


/*output : 
[ 2, 3, 4, 1 ]
*/