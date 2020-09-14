/*
Problem:Convert all the strings to title caps in a string array
*/
(function(array) { 
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
    console.log(titlecaps);
})(array = ["satya","prasad","behara"]);

/*output : 
[ 'Satya', 'Prasad', 'Behara' ]
*/