import flipSwitch from "./actions";

const initialState = {
  isLightOn: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FLIP":
      return {
        isLightOn: flipSwitch(state.isLightOn),
      };
    default:
      return state;
  }
};

export default reducer;
