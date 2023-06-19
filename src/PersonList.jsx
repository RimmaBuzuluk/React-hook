import React from "react";
import PersonItem from "./PersonItem";
import Person from "./store/Person";


function PersonList() {

  const {people}=Person

  return (
    <div className="person_list_page">
        <p>Person List</p>
        {people.map((person)=>(
            <PersonItem key={person.id} person={person}/>
        ))}
    </div>
  );
}

export default PersonList;