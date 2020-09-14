/*
problem
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

Input:
isEven(12);
isEven(0);
isEven(11);
isEven(“11h”);
Output:
true
true
false
-1
*/


function isEven(num){
 if(isNaN(num)){
     console.log(-1);
 }else{
     console.log(num%2 == 0)
 }
}
isEven(12);//true
isEven(0);//true
isEven(11);//false
isEven("11h");//-1