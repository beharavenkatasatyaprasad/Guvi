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
try{
	if(typeof(x1) !== 'number' || typeof(x2) !== 'number' || typeof(y1) !== 'number' || typeof(y2) !== 'number') throw 'Invalid input';
	else return Math.sqrt( Math.pow(difference(x1,x2),2) + Math.pow(difference(y1,y2),2) );
}catch(err){
	return err;
}
}
console.log(getDistance(100, 100, 400, 300));//360.5551275463989
console.log(getDistance('satya', 100, 400, 300));//Invalid input