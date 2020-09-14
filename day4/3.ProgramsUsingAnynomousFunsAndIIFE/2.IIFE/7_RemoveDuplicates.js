/*
Remove duplicates from an array
*/
(function (array) { 
var b=[]
for(var i=0;i<array.length;i++){
if(b.indexOf(array[i]) === -1){
    b.push(array[i])
}}
console.log(b);
})(array = [1,2,2,5,7,6,8,6,8,0]);


/*output : 
[ 1, 2, 5, 7, 6, 8, 0 ]
*/