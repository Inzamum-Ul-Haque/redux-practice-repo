import React, { useContext, useReducer } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  // const { count, setCount } = useContext(COUNTER_CONTEXT); // Global state
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="border-8 border-indigo-500/50 p-24 rounded-xl">
        <div className="text-2xl text-center">
          <h1 className="text-3xl">Child</h1>
          <h1>{state}</h1>
        </div>
        <div className="flex">
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}
            className="p-5 border-4 border-cyan-300 my-5 rounded-lg mr-4"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: 6 })}
            className="p-5 border-4 border-cyan-300 my-5 rounded-lg"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Child;
