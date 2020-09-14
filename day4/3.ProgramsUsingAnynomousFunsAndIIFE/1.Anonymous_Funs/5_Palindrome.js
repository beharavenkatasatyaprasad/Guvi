/*
Return all the palindromes in an array
*/
var palindrome = function (array) { 
function ChangeArrToStr(array){
	//This function will parse all elements in array to Strings and push them into a new array
    var strarr = [];//new array
    for(var i=0;i<array.length;i++){
        if(isNaN(array[i])){
            //if the element is a string do nothing
            c = array[i]
        }
    else{
        //if the element is not string change it into a string and store in variable c
        var c = "";
        c = c + array[i];
       
    }
    strarr.push(c);//push parsed thing into new array
        
    }
    
   return (strarr);//return the newarray
}
var strarray = ChangeArrToStr(array);//parsedarray is stored in strarray
function isPalindrome(n)
{   
    //This function will check wether the elements in strarray is palindrome or not
   var split_ele=n.split("");//splits the elements into an array
    var rev = reverse(split_ele);//reversed element is stored in rev
   
    function reverse(split_element){
        //this function will reverse the splited array
        var revarr = [];
        for(var i=split_element.length-1;i>=0;i--){
            revarr.push(split_element[i])
        }
        return revarr;
    }
    var count = 0;
    for(var k=0;k<rev.length;k++){
        if(rev[k] === split_ele[k]){
            count++;
        }
    }
    if(count == rev.length && count == split_ele.length){
        return true;
    }else{
        return false;
    }
}

for(var i=0;i<strarray.length;i++){
    if(isPalindrome(strarray[i])){
        console.log(strarray[i]);
    }
}
}
var array = [121,213,332,454,"ada",671,767,"sas"];
palindrome(array)

/*output : 
121
454
ada
767
sas
*/