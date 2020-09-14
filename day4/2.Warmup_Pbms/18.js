/*
Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.
Input:
isSameLength(“GUVI”, “GEEK”);
Output:
true
*/


function isSameLength(word1, word2){
    if(typeof(word1) === "string" && typeof(word2) === "string"){
    console.log(word1.length == word2.length);
    }else{
        console.log(-1);
    }
}
isSameLength("GUVI","SATYA");//false
isSameLength("GUVI","GEEK");//true
isSameLength("CODE","KATA");//true
isSameLength("HELL","BELL");//true
isSameLength(1,"SATYA");//-1
isSameLength("BEHARA",8);//-1