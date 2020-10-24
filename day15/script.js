var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var PetAvailability = /** @class */ (function () {
    function PetAvailability() {
        this.data = [];
        this.id = 0;
        this.petData = {
            "Dog": 0,
            "Cat": 0,
            "Parrot": 0,
            "Fish": 0,
            "Turtle": 0,
            "Rabbit": 0
        };
    }
    PetAvailability.prototype.idMan = function () {
        return this.id + 1;
    };
    PetAvailability.prototype.insert = function (data) {
        this.id = this.idMan();
        this.petData[data.type] += 1;
        data["id"] = this.id;
        data["owners"] = data.owners || 0;
        this.data.push(data);
    };
    PetAvailability.prototype.availability = function (type, count) {
        var availCount = this.petData[type];
        return availCount;
    };
    PetAvailability.prototype.petCounts = function () {
        return this.petData;
    };
    PetAvailability.prototype.petDetails = function (id) {
        return this.data.filter(function (x) { return x.id == id; })[0];
    };
    PetAvailability.prototype.deletePet = function (id) {
        var obj = this.petDetails(id - 1);
        this.petData[obj.type] -= 1;
        this.data.splice(id - 1, 1);
        for (var i = id - 1; i < this.data.length; i++) {
            this.data[i].id -= 1;
        }
    };
    return PetAvailability;
}());
var PetRequest = /** @class */ (function (_super) {
    __extends(PetRequest, _super);
    function PetRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enquiry = [];
        _this.enquiryList = [];
        _this.enquiryBool = [];
        return _this;
    }
    PetRequest.prototype.insert = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        this.enquiry = __spreadArrays(arr);
        this.enquiryList.push(this.enquiry);
    };
    PetRequest.prototype.fiveStatus = function () {
        this.tempData = JSON.parse(JSON.stringify(avObject.petCounts()));
        this.enquiryBool = [];
        var index = Math.min(5, this.enquiryList.length);
        for (var i = 0; i < index; i++) {
            for (var j = 0; j < this.enquiryList[i].length; j++) {
                if (!(this.enquiryList[i][j] in this.tempData)) {
                    this.enquiryBool[i] = false;
                    break;
                }
                if (this.tempData[this.enquiryList[i][j]] != 0) {
                    this.tempData[this.enquiryList[i][j]] -= 1;
                }
                else {
                    for (var k = 0; k < j; k++) {
                        this.tempData[this.enquiryList[i][k]] += 1;
                    }
                    this.enquiryBool[i] = false;
                    break;
                }
                this.enquiryBool[i] = true;
            }
        }
        return this.enquiryBool;
    };
    PetRequest.prototype.allStatus = function () {
        this.tempData = JSON.parse(JSON.stringify(avObject.petCounts()));
        for (var i = 0; i < this.enquiryList.length; i++) {
            for (var j = 0; j < this.enquiryList[i].length; j++) {
                if (!(this.enquiryList[i][j] in this.tempData)) {
                    this.enquiryBool[i] = false;
                    break;
                }
                if (this.tempData[this.enquiryList[i][j]] != 0) {
                    this.tempData[this.enquiryList[i][j]] -= 1;
                }
                else {
                    for (var k = 0; k < j; k++) {
                        this.tempData[this.enquiryList[i][k]] += 1;
                    }
                    this.enquiryBool[i] = false;
                    break;
                }
                this.enquiryBool[i] = true;
            }
        }
        return this.enquiryBool;
    };
    PetRequest.prototype.removeRequest = function (id) {
        this.enquiryList.splice(id - 1, 1);
        this.enquiryBool.splice(id - 1, 1);
    };
    return PetRequest;
}(PetAvailability));
var avObject = new PetAvailability;
avObject.insert({ type: "Dog", name: "Max", age: 3, gender: "Male", color: "red" });
avObject.insert({ type: "Dog", name: "abba", age: 8, gender: "Male", color: "brown" });
avObject.insert({ type: "Turtle", name: "sam", age: 11, gender: "Female", color: "dark green", owners: 2 });
avObject.insert({ type: "Dog", name: "Jojo", age: 7, gender: "Male", color: "black" });
avObject.insert({ type: "Cat", name: "meow", age: 9, gender: "Female", color: "white", owners: 1 });
avObject.insert({ type: "Cat", name: "duggo", age: 5, gender: "Female", color: "brown", owners: 3 });
avObject.insert({ type: "Parrot", name: "pappu", age: 3, gender: "Female", color: "green" });
var delObject = new PetRequest;
delObject.insert("Dog", "Cat");
delObject.insert("Dog", "Rabbit");
delObject.insert("Fish", "Cat");
delObject.insert("Parrot");
delObject.insert("Turtle", "Cat");
delObject.insert("Dog");
delObject.insert("Dog", "Cat");
delObject.insert("Cat");