/*
Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
Input:
getLastElement([1, 2, 3, 4]);
Output:
4
*/

function getLastElement(array){
    //this function returns the last element of the given array
    try{
    if(typeof(array) !== 'object') throw 'Invalid input'
	 else console.log(array[array.length-1]);
 }catch(err){
	 console.log(err)
 }

}
getLastElement([1, 2, 3, 4]);//4
getLastElement("satya")//Invalid input