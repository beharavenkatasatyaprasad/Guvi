/*
Return all the palindromes in an array
*/
var palindrome = function (array) { 
function ChangeArrToStr(array){
    var strarr = [];
    
    for(var i=0;i<array.length;i++){
        if(isNaN(array[i])){
            
            c = array[i]
        }
    else{
        var c = "";
        c = c + array[i];
       
    }strarr.push(c);}
    
   return (strarr)
}
var strarray = ChangeArrToStr(array);
function isPalindrome(n)
{   
   var split_ele=n.split("");
    var rev = reverse(split_ele);
   
    function reverse(split_element){
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