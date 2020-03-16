import React from "react";
import useCount from "./useCount";

function DemoHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, countPlus, countMinus] = useCount(0);

  return (
    <div className="demo-hook">
      <h2 data-testid="countvalue" className="mx-5">{count}</h2>
      {/* <button onClick={() => setState({...state, count: state.count + 1})}> */}
      <button data-testid="incrementButton" className="btn btn-primary px-4 mx-2" onClick={countPlus}>
        +1
      </button>
      <button data-testid="decrementButton" className="btn btn-primary px-4 mx-2" onClick={countMinus}>
        -1
      </button>
    </div>
  );
}

export default DemoHook;