//problem 0: Part A

var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white",
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}

//Basic Tasks to play with JSON
//-------------------------------//
//1.Add height and weight to Fluffy
cat.height = 2.5;
//------------------------------//

//2.Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name="Fluffyy";
//-----------------------------//

//3.List all the activities of Fluffyy’s catFriends.
for(var i=0;i<(cat.activities).length;i++){
console.log(cat.activities[i])
}
//output:
//play
//eat cat food

//-----------------------------//
//4.Print the catFriends names.
for(var i=0;i<(cat.catFriends).length;i++){
console.log(cat.catFriends[i].name)
}
//output:
//bar
//foo

//-----------------------------//
//5.Print the total weight of catFriends
var totalweight=0;
for(var w=0;w<(cat.catFriends).length;w++){
totalweight=totalweight+cat.catFriends[w].weight
}
console.log(totalweight);
//output: 11

//-----------------------------//
//6.Print the total activities of all cats 
var no_of_fluffy_activities= (cat.activities).length
var no_of_frndcat_activites=0;
for(var m=0;m<(cat.catFriends).length;m++){
    
   no_of_frndcat_activites = no_of_frndcat_activites + cat.catFriends[m].activities.length;
}
console.log(no_of_fluffy_activities + no_of_frndcat_activites)
//output:6

//-----------------------------//

//7.Add 2 more activities to bar & foo cats
var newactivities = ["watching tv" , "singing songs"];
for(var a=0;a<(cat.catFriends).length;a++){
    for(var na=0;na<newactivities.length;na++){
    cat.catFriends[a].activities.push(newactivities[na])
}}

//8.Update the fur color of bar
cat.catFriends[0].furcolor = 'black';

console.log(cat);