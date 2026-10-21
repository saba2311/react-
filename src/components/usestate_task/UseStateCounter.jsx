import React, { useState } from "react";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = (value) => {
    if (count + value > 10) {
      setMessage("You can’t increase value above 10");
      return;
    }

    setCount(count + value);
    setMessage("");
  };

  const decrement = (value) => {
    if (count - value < 0) {
      setMessage("You can’t decrease value below 0  ");
      return;
    }
    setCount(count - value);
    setMessage("");
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center">
        <h2 className="mb-3 text-center">UseStateCounter: {count}</h2>

        {message && <div className="alert alert-danger">{message}</div>}

        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <button
            className="btn btn-primary"
            onClick={() => increment(1)}
          >
            Increment By 1
          </button>

          <button
            className="btn btn-primary"
            onClick={() => decrement(1)}
          >
            Decrement By 1
          </button>

          <button
            className="btn btn-success"
            onClick={() => increment(2)}
          >
            Increment By 2
          </button>

          <button
            className="btn btn-success"
            onClick={() => decrement(2)}
          >
            Decrement By 2
          </button>

          <button
            className="btn btn-secondary"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};