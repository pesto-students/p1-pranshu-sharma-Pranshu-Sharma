import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const stepsTaken = useSelector((state) => state.stepsTaken);

  const [state, setState] = useState({
    stepsTaken: stepsTaken,
  });

  useEffect(() => {
    setState({
      stepsTaken: stepsTaken,
    });
  }, [stepsTaken]);

  const dispatch = useDispatch();

  const addStep = () => {
    dispatch({ type: "ADD_STEP" });
  };

  const resetSteps = () => {
    dispatch({ type: "RESET_STEPS" });
  };

  return (
    <div className="App">
      You've walked {state.stepsTaken} step
      {state.stepsTaken !== 1 ? "s" : ""} today!
      <br />
      <button className="add-step-button" onClick={addStep}>
        Add a step
      </button>
      <br />
      <button className="reset-steps-button" onClick={resetSteps}>
        Reset Steps
      </button>
    </div>
  );
}

export default App;
