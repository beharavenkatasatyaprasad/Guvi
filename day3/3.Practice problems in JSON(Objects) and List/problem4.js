/*Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):

Output:
var object = {
GUVI : “Geek”
}*/

var array = ["GUVI", "I", "am", "Geek"];

function transformFirstAndLast(arr) {
  var object = {};
  
    object[arr[0]] = arr[arr.length-1];
  return object;
}
console.log(transformFirstAndLast(array));

//Output: { GUVI: 'Geek' }
