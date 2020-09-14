/*
Problem:Print odd numbers in an array 
*/
var PrintOdd = function(array) { 
    var oddarray=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
            }
        }
}
var array = [1,2,3,4,5,6,7,8,9]

PrintOdd(array);
/*output : 
1
3
5
7
9
*/