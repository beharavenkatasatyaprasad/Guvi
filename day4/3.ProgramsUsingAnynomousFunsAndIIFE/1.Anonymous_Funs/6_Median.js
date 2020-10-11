/*
Return median of two sorted arrays of same size 
*/
let MedianOf = function (array1,array2) { 
let m1 = GetMid(array1);
let m2 = GetMid(array2);
let median = (m1+m2)/2;
console.log(median);

function GetMid(array){
let arr_len = array.length 
let mid = arr_len/2;
if(mid !== parseInt(mid)){
mid = mid-0.5;
}else{
  mid = mid;
}
return array[mid];
}
}
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45]
MedianOf(arr1,arr2);


/*output : 
16
*/
