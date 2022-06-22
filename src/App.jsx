import { useEffect } from "react";
import { createStore } from "redux";
function App() {
  const increment = () => {
    return {
      type: "INCREMENT"
    };
  };
  const decrement = () => {
    return {
      type: "DECREMENT"
    };
  };
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    }
  };
  let store = createStore(counter);
  useEffect(() => {}, [store]);
  store.subscribe(() => console.log(store.getState()));
  store.dispatch(increment());
  store.dispatch(decrement())
  return <div className="text-red-300">Hello World</div>;
}

export default App;
