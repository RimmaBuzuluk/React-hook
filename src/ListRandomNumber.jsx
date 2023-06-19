import React, { useState } from "react";


const ListRandomNumber=({person})=> {

    const [numbers, setNumbers] = useState([]);

    const addNumber = () => {
      const randNumber = Math.round(Math.random() * 10);
      setNumbers([...numbers, randNumber]);
    };
  return (
    <div >
        <p>new list with random number</p>
          <ul>
            {numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
          <button onClick={addNumber}>new number</button>
    </div>
  );
}

export default ListRandomNumber;