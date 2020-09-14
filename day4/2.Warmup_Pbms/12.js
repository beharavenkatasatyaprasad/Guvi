/*
Problem
Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Examples
frames(1, 1) ? 60
frames(10, 1) ? 600
frames(10, 25) ? 15000
*/

function frames(num1,num2){
    try{
        if(typeof(num1) !== 'number' || typeof(num2) !== 'number') throw 'Invalid input';
        else console.log(num1*num2*60);
    }catch(err){
        console.log(err);
    }
    
}
frames(1,2);//60
frames(10, 1);//600
frames(10, 25);//15000
frames("satya","behara");//Invalid input