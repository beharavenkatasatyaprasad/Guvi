/*
Problem:
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

*/
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
 var negSum = 0;
 var PosCount=0;
 var NewArray=[];
 for(var i=0;i<arr.length;i++){
     if(arr[i]<0){
         negSum = negSum + arr[i];
     }else{
         PosCount++;
     }
 }
 NewArray.push(PosCount,negSum)
return NewArray;
}
console.log(ar2(arr));//[ 6, -17 ]