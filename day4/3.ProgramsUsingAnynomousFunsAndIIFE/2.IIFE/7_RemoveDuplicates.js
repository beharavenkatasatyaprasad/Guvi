/*
Remove duplicates from an array
*/
(function (array) { 
var newArray=[];//Empty array
for(var i=0;i<array.length;i++){
if(newArray.indexOf(array[i]) === -1)//checks wether array[i] is already in new array 
{
    newArray.push(array[i]);//if condition is false array[i] is pushed into newarray 
}}
try{
  console.log(newArray);  
}catch(err){
    console.log("Error Occured")
}

})(array = [1,2,2,5,7,6,8,6,8,0]);


/*output : 
[ 1, 2, 5, 7, 6, 8, 0 ]
*/