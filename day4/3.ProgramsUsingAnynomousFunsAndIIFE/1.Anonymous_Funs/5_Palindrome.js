/*
Return all the palindromes in an array
*/
let Palindrome = function (array) { 
function ChangeArrToStr(array){	//This function will parse all elements in array to Strings and push them into a new array\
	let strarr = [];//new array
	let c = "";
    for(let i=0;i<array.length;i++){
        if(isNaN(array[i])){
            c = array[i];
        }
    else{//if the element is not string change it into a string and store in variable c
        c = c + array[i];       
  	  }
    strarr.push(c);//push parsed thing into new array
    }
   return (strarr);//return the newarray
}
let strarray = ChangeArrToStr(array);//parsedarray is stored in strarray
function isPalindrome(n)
{ //This function will check wether the elements in strarray is palindrome or not
   let split_ele=n.split("");//splits the elements into an array
    let rev = reverse(split_ele);//reversed element is stored in rev
    
	function reverse(split_element){//this function will reverse the splited array
        let revarr = [];
        for(let i=split_element.length-1;i>=0;i--){
            revarr.push(split_element[i]);
        }
        return revarr;
    }
    let c = 0;
    for(let w=0;w<rev.length;w++){
        if(rev[w] === split_ele[w]){
            c++;
        }
    }
    if(c == rev.length && c == split_ele.length){
        return true;
    }else{
        return false;
    }
}

for(let i=0;i<strarray.length;i++){
    if(isPalindrome(strarray[i])){
        console.log(strarray[i]);
  	  }
	}
}
let array = [121,213,445,454,"ada",671,767,"asa"];
Palindrome(array);

/*output : 
121
454
ada
767
asa
*/
