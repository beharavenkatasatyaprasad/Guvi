/*
Problem
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
Examples
remainder(1, 3) ? 1
remainder(3, 4) ? 3
remainder(-9, 45) ? -9
remainder(5, 5) ? 0
*/

function remainder(num1,num2){
     //This function returns the remainder of two parameters
     try{
        if(typeof(num1) !== 'number' || typeof(num2) !== 'number') throw 'Invalid input';
        else console.log(num1%num2);
    }catch(err){
        console.log(err);
    }

}

remainder(1, 3);//1
remainder(3, 4); //3
remainder(-9, 45);//-9
remainder(5, 5);//0
remainder(77,'A');//Invalid input    