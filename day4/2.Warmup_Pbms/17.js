/*
Problem:
Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
Input:
getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
Output:
4
0
-1
-1
*/


function getLengthOfWord(word1){
if (typeof(word1) === "string"){
    console.log(word1.length);
}else{
    console.log(-1);
}
}
getLengthOfWord("GUVI");//4
getLengthOfWord("");//0
getLengthOfWord();//-1
getLengthOfWord(9);//-1