/*Problem 9(20 mins):
Parsing JSON objects and Compare:
Write a function to return the list of characters below 20 age
*/

var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 6}
var testName
function assertObjectsEqual(actual, expected, testName){
 
 if(JSON.stringify(actual) === JSON.stringify(expected)){
     console.log("Passed");
 }
 else{
console.log("Failed [myTestCase] Expected" + JSON.stringify(expected) + 'but got' + JSON.stringify(actual));
 }
}
assertObjectsEqual(actual, expected, testName)
