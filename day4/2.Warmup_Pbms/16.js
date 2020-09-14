/*
Problem:
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

Input:
getFullName(“GUVI”, “GEEK”);
getFullName(“GUVI”, );
getFullName(, “GEEK”);
getFullName(“”, “”);
Output:
“GUVI GEEK”
“GUVI”
“GEEK”
“”
*/


function getFullName(firstName, lastName){
   var fullname =  firstName  + " " +lastName;
 console.log(fullname.trim());
}
getFullName("GUVI", "GEEK");//GUVI GEEK
getFullName("GUVI","");//GUVI
getFullName("", "GEEK");//GEEK
getFullName(",","");//,
