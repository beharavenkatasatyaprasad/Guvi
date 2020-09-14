/*
Problem:
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

*/
function getPositives(ar)
{
var posArray = [];
for(var i=0;i<ar.length;i++){
if(ar[i]>0){
    posArray.push(ar[i])
}
}
return posArray;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//(o:P) [ 10, 12, 5, 90, 1 ]