/*
Problem:
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3
*/

function getNthElement(array,n){
	//returns the element at the given integer, within the given array.if either of the inputs are not of type array and number respectively. it throws an error messa
 try{
	 if(typeof(array) !== 'object' || typeof(n) != 'number') throw 'Invalid input'
	 else console.log(array[n]);
 }catch(err){
	 console.log(err)
 }
 
}
getNthElement([1, 3, 5], 1);//3
getNthElement([1,3,5],'satya');//Invalid input