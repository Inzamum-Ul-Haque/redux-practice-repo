import { useReducer } from "react";
import "./App.css";
import LongForm from "./components/LongForm";

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

  return (
    <div className="App">
      {/* <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        Increase
      </button>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}>
        Decrease
      </button> */}
      <LongForm />
    </div>
  );
}

export default App;
