/*
Problem:
Calculate the sum of numbers received in a comma delimited string
*/
console.log(sumCSV("1.5,2.3,3.1,4,5.5,6,7,8,9,10.9"));
function sumCSV(s)
{
  Numarray=s.split(",").map(Number);
  sum =0;
  for(var i=0;i<Numarray.length;i++){
      sum = sum + Numarray[i]
  }
  return sum;
}

//output : 57.3