import { useState, useEffect } from "react";

function useCount(initValue) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(initValue);
  const [x10, setX10] = useState(count*10);

  useEffect(() => {
    setX10(count * 10);
  });

  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count - 1);

  return [count, countPlus, countMinus, x10];
}

export default useCount;
