/*
Task for callback

Write a function which takes 2 parameters 
Operation
Function array 

 Based on the parameters do the operation
*/

function process(a,b) {
	var val1 = 200, val2= 800;
    return a[b-1](val1,val2);

}

function add(a,b)
{
	return a+b
}
function sub(a,b)
{
	return a-b
}
function mul(a,b)
{
	return a*b
}

var opers = [add,sub,mul];
var oper1 = process(opers,1);
var oper2 = process(opers,2);
var oper3 = process(opers,3);
console.log(oper1,oper2,oper3);
