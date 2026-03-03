import { useState } from 'react';

interface Props {
  value?: number;
}

export const useCounter = (value = 1) => {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter == 1) return;
    setCounter(counter - 1);
  };

  return {
    //Props
    counter,

    //Methods
    increment,
    decrement,
  };
};
