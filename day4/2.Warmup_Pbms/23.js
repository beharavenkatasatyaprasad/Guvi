/*
Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = {
}
Input:
addProperty(obj, “mykey”);
Output:
{
mykey: true
}
*/

var obj = {
 mykey: "value"
};
function addProperty(obj, key){
 obj[key] = "true";
 console.log(obj);
}
addProperty(obj, "mykey");//{ mykey: 'true' }