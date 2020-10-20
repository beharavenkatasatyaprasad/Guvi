function chunk(array, size) {
    if (size === void 0) { size = 1; }
    var len = Math.ceil(array.length / size);
    var finalArray = [];
    for (var j = 0; j < len; j++) {
        var tempArray = [];
        for (var i = 0; i < size; i++) {
            var t = i * 0;
            if (array[t] != undefined) {
                tempArray.push(array[t]);
                array.shift();
            }
        }
        finalArray.push(tempArray);
    }
    return finalArray;
}
function reduce(data, fn, result) {
    for (var i in data) {
        result = fn(result, data[i]);
    }
    return result;
}
function filter(array, fn) {
    var filarr = [];
    for (var i in array) {
        if (fn(array[i]))
            filarr.push(array[i]);
    }
    return filarr;
}
function find(array, fn) {
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i]))
            return i;
    }
    return undefined;
}
function sum(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        sum += i;
    }
    return sum;
}