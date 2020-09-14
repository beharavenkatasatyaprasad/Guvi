/*
Problem:
Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
n = 0 -> 2° -> [1]
n = 1 -> 2°, 2¹ -> [1,2]
n = 2 -> 2°, 2¹, 2² -> [1,2,4]
Input:
powersOfTwo(0)
powersOfTwo(1)
powersOfTwo(2)
Output:
1
1,2
1,2,4
*/

function powersOfTwo(n){
  var res = ""
for(var i=0;i<=n;i++){
     res = res + Math.pow(2,i); 
     if(i==n){
         break;
     }else{
         res = res + ","
     }

}
  console.log(res);
}
powersOfTwo(0);//1
powersOfTwo(1);//1,2
powersOfTwo(2);//1,2,4