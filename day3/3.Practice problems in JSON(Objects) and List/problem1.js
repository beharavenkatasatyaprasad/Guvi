/*Problem 1 (5 mins):
Parsing an JSON object’s Values:
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:
[“RajiniKanth”, 33, false]
*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
var newArray = [];


function printAllValues(obj) {
for (var x in obj){
    newArray.push(obj[x]);
}
console.log(newArray);
}
printAllValues(obj);

//Output: [ 'RajiniKanth', 33, false ]