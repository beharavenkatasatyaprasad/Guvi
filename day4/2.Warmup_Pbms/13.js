/*
problem:
Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
Examples
divisibleByFive(5) ? true
divisibleByFive(-55) ? true
divisibleByFive(37) ? false
*/

function divisibleByFive(num1) {
      //function that returns true if an integer is evenly divisible by 5, if input is not a number throws errror message
       try{
       if(typeof(num1) === "number")console.log(num1%5 == 0);
       else throw num1  + " is not a number";
   } catch(err){
       console.log(err)
   }
    
}
divisibleByFive(5);//true
divisibleByFive(-55);//true
divisibleByFive(37);//false
divisibleByFive("satya")//satya is not a number