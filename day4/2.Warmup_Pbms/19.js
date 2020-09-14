/*
Problem:
Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));

*/


function getDistance(x1, y1, x2, y2)
{
    function difference(a,b)
	{
     if (a > b){
    return (a - b);
		} 
	else {
    return (b - a);
		}
    }
var x = difference(x1,x2);
var y = difference(y1,y2);
var distance = Math.sqrt( Math.pow(x,2) + Math.pow(y,2) );
return distance;
}
console.log(getDistance(100, 100, 400, 300));//360.5551275463989