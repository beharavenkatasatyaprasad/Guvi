/*
Problem:
Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
n = 0 -> 2⁰ -> [1]
n = 1 -> 2⁰, 2¹ -> [1,2]
n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
Input:
powersOfTwo(0)
powersOfTwo(1)
powersOfTwo(2)
Output:
1
1,2
1,2,4
*/

//Method 1: (spread operator)
//----------------------------
function findMax(ar)
{
var big = Math.max(...ar);
return big;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);

console.log("Max:" , max);//Max: 90

//Method 2: (Without using predefined functions)
//------------------------
function findMax(ar)
{
var big = ar[0];
for(var i=0;i<ar.length;i++){
    if(big < ar[i]){
        big = ar[i];
    }
}
return big;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);

console.log("Max:" , max);//Max: 90

