import React from "react";
import { useParams } from "react-router-dom";
import Person from "./store/Person";


const CardPerson=()=> {
  const { id } = useParams();
  const selectedPerson = Person.people.find((person) => person.id === parseInt(id));

  if (!selectedPerson) {
    return <div>Person not found</div>;
  }
 

  return (
    <div className="itemList" >
      <h1>{selectedPerson.name}</h1>
      <p>{selectedPerson.description}</p>
    </div>
  );
}

export default CardPerson;