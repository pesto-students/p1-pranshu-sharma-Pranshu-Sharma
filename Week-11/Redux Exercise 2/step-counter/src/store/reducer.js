import { addStep, resetSteps } from "./actions";

const initialState = {
  stepsTaken: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STEP":
      return {
        stepsTaken: addStep(state.stepsTaken),
      };
    case "RESET_STEPS":
      return {
        stepsTaken: resetSteps(),
      };
    default:
      return state;
  }
};

export default reducer;
