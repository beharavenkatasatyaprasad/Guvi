/*
Problem:
Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

Input:
areBothOdd(1, 3);
areBothOdd(1, 4);
areBothOdd(2, 3);
areBothOdd(0, 0);
Output:
true
false
false
false
*/


function areBothOdd(num1, num2){
	try{
        if(typeof(num1) !== 'number' || typeof(num2) !== 'number') throw 'Invalid input';
        else console.log((num1%2 !=0) && (num2%2 !=0));
    }catch(err){
        console.log(err);
    }
 
}
areBothOdd(1, 3);//true
areBothOdd(1, 4);//false
areBothOdd(2, 3);//false
areBothOdd(0, 0);//false
areBothOdd(0,"satya")//Invalid input