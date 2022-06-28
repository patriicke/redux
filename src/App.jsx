import { useEffect } from "react";
import { useSelector } from "react-redux";
const App = () => {
  const couter = useSelector((state) => state.counter);
  return <div>Counter is {couter} </div>;
};
export default App;
