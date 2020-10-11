/*
Problem:Convert all the strings to title caps in a string array
*/
var TCaps = function(arr) { 
       var tcaps=[];
    for(var m=0;m<arr.length;m++){
        var tot = arr[m].split("")
        var cap = tot[0].toUpperCase();
        var Capital = Tojoin(tot,cap);
        tcaps.push(Capital);
        
    }
        function Tojoin(tot,cap){
			//This function joins the Title letter with rest of the letters in a string
            var a=""
            var join="";
            for(var i=1;i<tot.length;i++){
                a=a+tot[i]+""
            }
            join=cap+a;
            return join;
        }
    return titlecaps;
}
var array = ["junnu","munna","nani"]
console.log(TCaps(array));

/*o/p : 
[ 'Satya', 'Prasad', 'Behara' ]
*/
