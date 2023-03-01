import { createContext, useReducer, useState } from "react";
import "./App.css";
import LongForm from "./components/LongForm";
import Parent from "./pages/Parent";

export const COUNTER_CONTEXT = createContext();

function App() {
  //   const initialState = 0;
  //   const reducer = (state, action) => {
  //     if (action.type === "INCREMENT") {
  //       return state + action.payload;
  //     } else if (action.type === "DECREMENT") {
  //       return state - action.payload;
  //     } else {
  //       return state;
  //     }
  //   };

  //   const [state, dispatch] = useReducer(reducer, initialState);

  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        {/* <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        Increase
        </button>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}>
        Decrease
      </button> */}
        {/* <LongForm /> */}
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
