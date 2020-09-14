/*
Problem:
Fill in your code that takes an number minutes and converts it to seconds.
Examples
toSeconds(5) -> 300
toSeconds(3) -> 180
toSeconds(2) -> 120
*/

function toSeconds(min) {
    //This function converts minutes into seconds.
    try{
        if(typeof(min) !== 'number')throw min + " is not a number"
        //if the input is not a number (throws an error message) else prints the converted
        else console.log(min*60)
    }catch(err){
        console.log(err);
    }
}
toSeconds(5);//300
toSeconds(3);//180
toSeconds(2);//120
toSeconds("satya");//satya is not a number