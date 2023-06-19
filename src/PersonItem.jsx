import React from "react";
import Person from "./store/Person";
import { Link } from "react-router-dom";


const PersonItem=({person})=> {

    // const handleClick=()=>{
    //   Person.selectedPerson(person.id)
    // }

  return (
    <Link to={`/person/${person.id}`}>
      <div className="itemList" >
          <h1>{person.name}</h1>
      </div>
    </Link>
  );
}

export default PersonItem;