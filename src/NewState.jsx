import React, { useState } from "react";
import App from ".//App.css"

function NewState() {
const [name, SetName]=useState(["Dmitro"])

const [inputValue, setInputValue] = useState('');

function RName(evetn){
    setInputValue(evetn.target.value)
    console.log(inputValue)
}
function addName(){
    if(inputValue.trim() !==""){
        SetName([...name, inputValue.trim()]);
        setInputValue('')
    }
}

  return (
    
    <div className="input">
        
       <input type="text" value={inputValue} onChange={RName}></input>
       <button onClick={addName}>add name to the list</button>
       <ul>
        {name.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewState;