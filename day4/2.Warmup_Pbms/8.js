/*
Problem
Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.
Examples
findPerimeter(6, 7) ? 26
findPerimeter(20, 10) ? 60
findPerimeter(2, 9) ? 22
*/

function findPerimeter(num1,num2) {
    //this function that takes height and width and finds the perimeter of a rectangle
    try{
        if(typeof(num1) !== 'number' || typeof(num2) !== 'number') throw 'Invalid input';
        else console.log(2*(num1+num2));
    }catch(err){
        console.log(err);
    }
    
}
findPerimeter(6, 7);// 26
findPerimeter(20, 10);//60
findPerimeter(2, 9);//22
findPerimeter('x',9);//Invalid input
findPerimeter('x','y');//Invalid input