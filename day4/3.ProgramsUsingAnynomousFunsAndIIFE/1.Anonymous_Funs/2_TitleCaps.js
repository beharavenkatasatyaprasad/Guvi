/*
Problem:Convert all the strings to title caps in a string array
*/
var TCaps = function(arr) { 
       let tcaps=[];
    for(let m=0;m<arr.length;m++){
        let tot = arr[m].split("")
        let cap = tot[0].toUpperCase();
        let Capital = jointhem(tot,cap);
        tcaps.push(Capital);
        
    }
	//This function joins the Title letter with rest of the letters in a string
        function jointhem(tot,cap){
            let tmp=""
            let joined="";
            for(let i=1;i<tot.length;i++){
                tmp=tmp+tot[i]+""
            }
            joined=cap+a;
            return joined;
        }
    return titlecaps;
}
let array = ["junnu","munna","nani"]
console.log(TCaps(array));

/*o/p : 
[ 'Junnu', 'Munna', 'Nani' ]
*/
