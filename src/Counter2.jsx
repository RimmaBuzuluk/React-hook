import { makeObservable, observable, action } from "mobx";

import { observer, useLocalObservable } from "mobx-react-lite";

import React from "react";

class CounterStore {
    count = 0;
  
    constructor() {
      makeObservable(this, {
        count: observable,
        increment: action,
        decrement: action,
      });
    }
  
    increment() {
      this.count++;
    }
  
    decrement() {
      this.count--;
    }
  }
  
const Counter2 = observer(() => {
  const counterStore = useLocalObservable(() => new CounterStore());

  return (
    <div>
      <h2>Counter: {counterStore.count}</h2>
      <button onClick={counterStore.increment}>Increment</button>
      <button onClick={counterStore.decrement}>Decrement</button>

    </div>
  );
});

export default Counter2;
