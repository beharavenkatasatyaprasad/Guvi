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
    //this function returns the opposite number if an input
    if(isNaN(num)||parseInt(num)!=num){
        //if input is not a number returns -1
        console.log(-1);
    }
	else{
	    //if input is a number returns opposite of it
        console.log(num - 2*num); 
    }
}
getOpposite(5);//-5
getOpposite(0);//0
getOpposite(-5);//5
getOpposite("5a");//-1
getOpposite(5.5);//-1
