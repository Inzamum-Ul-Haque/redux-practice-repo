import { actionTypes } from "./actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  city: "",
  state: "",
  zip: "",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
