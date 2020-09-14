/*
problem:
Create a function that takes a string and returns it as an integer.
Examples
toInteger(“6”) ?6
toInteger(“1000”) ? 1000
toInteger(“12”) ? 12
*/

function toInteger(mystr) {
    //This function takes a string and returns it as an integer.
   try{
        if(typeof(mystr)!=="string")throw mystr + " is already an Integer type"
        //if the input is not a string (returns an error message) else prints parsed integer
    else console.log(parseInt(mystr));
    /*we can alse replace "parseInt" with its shorthand "+"
    console.log(+mystr);*/
   }catch(err){
      console.log(err); 
    }
}
toInteger("6");//6
toInteger("1000");//1000
toInteger("12") ;//12
toInteger(12);//12 is already an Integer type