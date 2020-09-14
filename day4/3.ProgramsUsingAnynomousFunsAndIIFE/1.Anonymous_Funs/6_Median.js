/*
Return median of two sorted arrays of same size 
*/
var MedianOf = function (array1,array2) { 
var m1 = GetMid(array1);
var m2 = GetMid(array2);
var median = (m1+m2)/2;
console.log(median);

function GetMid(array){
var arr_len = array.length 
mid = arr_len/2;
if(mid !== parseInt(mid)){
mid = mid-0.5;
}else{
  mid = mid;
}
return array[mid];
}
}
var array1 = [1, 12, 15, 26, 38];
var array2 = [2, 13, 17, 30, 45]
MedianOf(array1,array2);


/*output : 
16
*/