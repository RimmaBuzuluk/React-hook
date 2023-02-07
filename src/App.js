import React, { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 555, 3]);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    setNumbers([...numbers, randNumber]);
  };
  return (
    <div className="App">
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>new number</button>
    </div>
  );
}

export default App;
