/*
Convert Hours into Seconds
Write a function that converts hours into seconds.
Examples
hourToSeconds(2) ? 7200
hourToSeconds(10) ? 36000
hourToSeconds(24) ? 86400
*/


function hourToSeconds(hours) {
    console.log(hours*60*60);
}
hourToSeconds(2)//7200
hourToSeconds(10)//36000
hourToSeconds(24)//86400


/* IF THE INPUT IS IN AN ARRAY

var arr = [1, 2, 3];
function hourToSeconds(arr) {
    for(var i=0;i<arr.length;i++){
         console.log(arr[i]*60*60);
    }
   
}
hourToSeconds(arr);
//output
//3600
//7200
//10800
*/