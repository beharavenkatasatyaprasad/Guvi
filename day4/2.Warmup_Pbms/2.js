/*
Problem:
Write a function called “getOpposite”.
Given a number, return its opposite
Input:
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite(“5a”);
getOpposite(5.5);
Output:
-5
0
5
-1
-1
*/

function getOpposite(num) {
    if(isNaN(num)||parseInt(num)!=num){
        console.log(-1);
    }
	else{
        console.log(num - 2*num); 
    }
}
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5);
