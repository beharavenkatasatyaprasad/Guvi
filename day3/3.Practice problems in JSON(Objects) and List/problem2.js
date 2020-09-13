/*Problem 2(5 mins) :

Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}

Example Output:
[‘name’, ‘age’, ‘hasPets’] */


var obj = {name : "RajiniKanth", age : 33, hasPets : false};
var newArray = [];


function printAllValues(obj) {
for (var x in obj){
    newArray.push(x);
}
console.log(newArray);
}
printAllValues(obj);

//Output: [ 'name', 'age', 'hasPets' ]
