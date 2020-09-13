
//How to compare two JSON have the same properties without order?


var obj1 = {"name":"GUVI","class":"FS"};
var obj2 = {"class":"FS","name":"GUVI"};


function noOrder(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            if(typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
                if(!isEqual(obj1[objKey], obj2[objKey])) {
                    return false;
                }
            } 
            else {
                return false;
            }
        }
    }

    return true;
}
console.log(noOrder(obj1,obj2));

//output:true