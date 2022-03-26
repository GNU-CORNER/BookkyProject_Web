import React from "react";

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <>
      <div>
        결과 : {number}
        <div>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
