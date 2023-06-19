import { makeAutoObservable } from "mobx";



class Person{
    people=[
        {
            id:1, 
            name:"John",
            photo:"johne.jps",
            description:"John`s description"
        },
        {
            id:1, 
            name:"Tom",
            photo:"johne.jps",
            description:"Tom`s description"
        }
    ];

    selectedPersonId=null;

    constructor(){
        makeAutoObservable(this);
    }

    selectedPerson(id){
        this.selectedPersonId=id
    }

    get selectedPerson(){
        return this.people.find((person)=>person.id === this.selectedPersonId)
    }

}

export default new Person();