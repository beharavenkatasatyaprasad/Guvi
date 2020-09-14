/*
problem:
Create a function that takes a string and returns it as an integer.
Examples
toInteger(“6”) ?6
toInteger(“1000”) ? 1000
toInteger(“12”) ? 12
*/

function toInteger(mystr) {
    console.log(parseInt(mystr));
    /*we can alse replace "parseInt" with its shorthand "+"
    console.log(+mystr);*/
}
toInteger("6");//6
toInteger("1000");//1000
toInteger("12") ;//12