import React, { useState } from "react";
import Find from "./Find";
import NewState from "./NewState";
import MobX from "./MobX";

function App() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    setNumbers([...numbers, randNumber]);
  };
  return (
    <div className="App">
      <p>new list with random number</p>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>new number</button>

    <NewState/>
    <Find/>
    <MobX/>
    </div>
  );
}

export default App;
