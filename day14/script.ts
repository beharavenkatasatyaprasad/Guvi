function chunk(array:Array<any>, size:number = 1) : Array<any>{
    let len: number = Math.ceil(array.length / size)
    let finalArray: Array<any> = [];
    for (let j = 0; j < len; j++){
        let tempArray: Array<any> = [];
        for (let i = 0; i < size; i++){
            let t = i * 0; 
            if(array[t] != undefined){
                tempArray.push(array[t])
                array.shift()
            }
        }
        finalArray.push(tempArray)
    }
    return finalArray;
}

function reduce(data: Array<any>, fn: Function, result: any){
    for (let i in data){
        result = fn(result, data[i])
    }
    return result;
}

function filter(array: Array<any>, fn: Function){
    var filarr = [];
    for (var i in array) {
        if (fn(array[i]))
            filarr.push(array[i]);
    }
    return filarr;
}

function find(array: Array<any>, fn: Function){
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i]))
            return i;
    }
    return undefined;
}

function sum(array: Array<any>){
    let sum = 0;
    for (let i of array){
        sum += i;
    }
    return sum;
}