import { useReducer } from "react";

const counterReducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      if (state?.count < 10) {
        return { count: (state?.count ) + 1 };
      } else {

        return state;
      }
    } else if (action.type === "DECREMENT") {
      return { count: (state?.count || 0) - 1 };
    
    } else if (action.type === "RESET") {
      return { count: 0 };
    } else {
      return state;
    }
  };
  
  
  export default function Counter() {
    // Initial state
    const initialState = { 
      count: 0 
    
    };
  
    // State and dispatch using useReducer
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    );
  }
  