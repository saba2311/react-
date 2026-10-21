import { useReducer } from "react";

const initialState = {
  count: 0,
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      if (state.count + action.value > 10) {
        return {
          ...state,
          message: "You can't increase value above 10",
        };
      }

      return {
        count: state.count + action.value,
        message: "",
      };

    case "DECREMENT":
      if (state.count - action.value < 0) {
        return {
          ...state,
          message: "You can't decrease value below 0 (zero)",
        };
      }

      return {
        count: state.count - action.value,
        message: "",
      };

    case "RESET":
      return {
        count: 0,
        message: "",
      };

    default:
      return state;
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center">
        <h2 className="mb-3 text-center">UseReducerCounter: {state.count}</h2>

        {state.message && (
          <div className="alert alert-danger">{state.message}</div>
        )}

        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREMENT", value: 1 })}
          >
            Increment By 1
          </button>

          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DECREMENT", value: 1 })}
          >
            Decrement By 1
          </button>

          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "INCREMENT", value: 2 })}
          >
            Increment By 2
          </button>

          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "DECREMENT", value: 2 })}
          >
            Decrement By 2
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducerCounter;