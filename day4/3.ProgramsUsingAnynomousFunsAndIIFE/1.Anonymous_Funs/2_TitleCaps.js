/*
Problem:Convert all the strings to title caps in a string array
*/
var TitleCaps = function(array) { 
       var titlecaps=[];
    for(var i=0;i<array.length;i++){
        var tot = array[i].split("")
        var cap = tot[0].toUpperCase();
        var Capitalized = Tojoin(tot,cap);
        titlecaps.push(Capitalized);
        
    }
        function Tojoin(tot,cap){
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
var array = ["satya","prasad","behara"]
console.log(TitleCaps(array));

/*output : 
[ 'Satya', 'Prasad', 'Behara' ]
*/