import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isLightOn = useSelector((state) => state.isLightOn);

  const [state, setState] = useState({
    isLightOn: isLightOn,
  });

  useEffect(() => {
    setState({
      isLightOn: isLightOn,
    });
  }, [isLightOn]);

  const dispatch = useDispatch();

  const flipLight = () => {
    dispatch({ type: "FLIP" });
  };

  const lightedness = state.isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      The room is {lightedness}
      <br />
      <button onClick={flipLight}>Flip</button>
    </div>
  );
}

export default App;
