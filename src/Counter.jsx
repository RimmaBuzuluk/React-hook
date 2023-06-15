import React from "react";
import { observer } from "mobx-react-lite";
import counter from "./store/counter";

const Counter = observer(() => {
  const handleIncrement = () => {
    counter.increment();
  };

  const handleDecrement = () => {
    counter.decrement();
  };

  return (
    <div className="counter">
      {"counter=" + counter.count}
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
});



export default Counter;