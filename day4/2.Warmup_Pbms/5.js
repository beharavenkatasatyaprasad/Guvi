/*
Problem:
Create a function that takes a number as an argument, increments the number by +1 and returns the result.
Examples
nextNumber(0) ? 1
nextNumber(9) ? 10
nextNumber(-3) ? -2
*/

function nextNumber(myint) {
   try{
       if(typeof(myint) === "number")console.log(myint+1)
       else throw myint  + " is not a number";
   } catch(err){
       console.log(err)
   }
}
nextNumber(0);//1
nextNumber(9);//10
nextNumber(-3);//-2
nextNumber("satya")//satya is not a number