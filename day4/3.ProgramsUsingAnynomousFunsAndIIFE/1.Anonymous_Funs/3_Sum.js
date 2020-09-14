/*
Sum of all numbers in an array
*/
var Sum = function(array) { 
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum = sum + array[i];
    }
    return sum;
}
var array = [1,2,3,4,5,6,7,8,9]
console.log("Sum: " + Sum(array));

/*output : 
Sum: 45
*/