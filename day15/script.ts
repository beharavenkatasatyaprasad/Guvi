type pets = "Dog" | "Cat" | "Parrot" | "Fish" | "Turtle" | "Rabbit";
type gender = "Male" | "Female";

interface petDetails{
    type: pets;
    name: string;
    age: number;
    gender: gender;
    color: string;
    owners?: number;
}

class PetAvailability{
    id: number;
    count: number;
    petData: object;
    data: Array<any> = [];

    constructor(){
        this.id = 0;
        this.petData = {
            "Dog":0,
            "Cat":0,
            "Parrot":0,
            "Fish":0,
            "Turtle":0,
            "Rabbit":0
        }
    }

    idMan(){
        return this.id + 1;
    }

    insert(data : petDetails){
        this.id = this.idMan();
        this.petData[data.type] += 1;
        data["id"] = this.id;
        data["owners"] = data.owners || 0;
        this.data.push(data)
    }

    availability(type: string, count: number){

        let availCount = this.petData[type];
        return availCount;
    }

    petCounts(){
        return this.petData;
    }

    petDetails(id?: number){
        return this.data.filter((x) => x.id == id)[0];
    }

    deletePet(id?: number){
        let obj = this.petDetails(id - 1)
        this.petData[obj.type] -= 1;
        this.data.splice(id-1, 1)
        for (let i = id-1; i < this.data.length; i++){
            this.data[i].id -= 1;
        }
    }
}




class PetRequest extends PetAvailability{
    requestId: Number;
    enquiry: Array<any> = [];
    enquiryList: Array<any> = [];
    enquiryBool: Array<any> = [];
    finalData: object;
    tempData: object;

    insert(...arr: Array<any>){
        this.enquiry = [...arr];
        this.enquiryList.push(this.enquiry);
    }

    fiveStatus(){
        this.tempData = JSON.parse(JSON.stringify(avObject.petCounts()));
        this.enquiryBool = [];
        let index = Math.min(5, this.enquiryList.length)
        for (let i = 0; i < index; i++){
            for (let j = 0; j < this.enquiryList[i].length; j++){
                if(!(this.enquiryList[i][j] in this.tempData)){
                    this.enquiryBool[i] = false;
                    break;
                }
                if(this.tempData[this.enquiryList[i][j]] != 0){
                    this.tempData[this.enquiryList[i][j]] -= 1;
                }else{
                    for(let k = 0; k < j; k++){
                        this.tempData[this.enquiryList[i][k]] += 1;
                    }
                    this.enquiryBool[i] = false;
                    break;
                }
                this.enquiryBool[i] = true;
            }

        }
        return this.enquiryBool;
    }

    allStatus(){
        this.tempData = JSON.parse(JSON.stringify(avObject.petCounts()));
        for (let i = 0; i < this.enquiryList.length; i++){
            for (let j = 0; j < this.enquiryList[i].length; j++){
                if(!(this.enquiryList[i][j] in this.tempData)){
                    this.enquiryBool[i] = false;
                    break;
                }
                if(this.tempData[this.enquiryList[i][j]] != 0){
                    this.tempData[this.enquiryList[i][j]] -= 1;
                }else{
                    for(let k = 0; k < j; k++){
                        this.tempData[this.enquiryList[i][k]] += 1;
                    }
                    this.enquiryBool[i] = false;
                    break;
                }
                this.enquiryBool[i] = true;
            }

        }
        return this.enquiryBool;
    }

    removeRequest(id: number){
        this.enquiryList.splice(id-1, 1)
        this.enquiryBool.splice(id-1, 1)
    }


}



let avObject = new PetAvailability;
avObject.insert({type: "Dog", name: "Max", age:3, gender: "Male", color: "red"})
avObject.insert({type: "Dog", name: "abba", age:8, gender: "Male", color: "brown"})
avObject.insert({type: "Turtle", name: "sam", age:11, gender: "Female", color: "dark green", owners: 2})
avObject.insert({type: "Dog", name: "Jojo", age:7, gender: "Male", color: "black"})
avObject.insert({type: "Cat", name: "meow", age:9, gender: "Female", color: "white", owners: 1})
avObject.insert({type: "Cat", name: "duggo", age:5, gender: "Female", color: "brown", owners: 3})
avObject.insert({type: "Parrot", name: "pappu", age:3, gender: "Female", color: "green"})



let delObject = new PetRequest;
delObject.insert("Dog", "Cat")
delObject.insert("Dog", "Rabbit")
delObject.insert("Fish", "Cat")
delObject.insert("Parrot")
delObject.insert("Turtle", "Cat")
delObject.insert("Dog")
delObject.insert("Dog", "Cat")
delObject.insert("Cat")