/*
Remove duplicates from an array
*/
var removeDuplicates = (array) =>{ 
var b=[]
for(var i=0;i<array.length;i++){
if(b.indexOf(array[i]) === -1){
    b.push(array[i])
}}
return b;
}
var array = [1,2,2,5,7,6,8,6,8,0];

console.log(removeDuplicates(array));


/*output : 
[ 1, 2, 5, 7, 6, 8, 0 ]
*/