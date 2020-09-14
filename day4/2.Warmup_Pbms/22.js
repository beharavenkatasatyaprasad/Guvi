/*
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
mykey: “value”
};
Input:
getProperty(obj,’mykey’);
getProperty(obj,’dummykey’);
Output:
value
NA
*/

var obj = {
 mykey: "value"
};
function getProperty(obj, key) {
  console.log(obj[key]);
}
getProperty(obj,"mykey");//value
getProperty(obj,"dummykey");//undefined