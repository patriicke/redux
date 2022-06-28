import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <div> Counter is {counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      {isLogged ? (
        <div>I can only see this if and only if I am logged in</div>
      ) : (
        "Login please"
      )}
    </div>
  );
};
export default App;
