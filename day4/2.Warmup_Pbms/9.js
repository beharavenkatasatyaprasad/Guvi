/*
problem
Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
Examples
lessThan100(22, 15) ? true
// 22 + 15 = 37
lessThan100(83, 34) ? false
// 83 + 34 = 117
*/

function lessThan100(num1,num2) {
    //this function will return true if the sum of both numbers is less than 100. Otherwise return false. if the input is not number throws error
    try{
        if(typeof(num1) !== 'number' || typeof(num2) !== 'number') throw 'Invalid input';
        else console.log((num1+num2)<100);
    }catch(err){
        console.log(err);
    }

	}
lessThan100(22,15);//true
lessThan100(83, 34);//false
lessThan100('str',44);//Invalid input
lessThan100('sa','pa'); //Invalid input 
