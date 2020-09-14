/*
Problem:
Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.

Input:
addFive(5);
addFive(0);
addFive(-5);

Output:
10
5
0
*/

function addFive(num) { 
//this function will 5 added to the given input

try{
    if(typeof(num) !== "number")throw "Input is not a Number"
    //if the input is not a number throws an error message as "Input is nor a number"
    else console.log(num+5);
    
}catch(err){
	console.log(err);
}

}
addFive(5);//10
addFive(0);//5
addFive(-5);//0
addFive("Satya");//Input is not a Number