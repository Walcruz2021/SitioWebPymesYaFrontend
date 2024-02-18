import { ADD_SERVICE, VALIDATION_ADDSERVICE, EDIT_COMPANY } from "./actions";

const initialState = {
  validation: [],
};

function rootReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
      };
    case VALIDATION_ADDSERVICE:
      return {
        ...state,
        validation: action.payload,
      };
    case EDIT_COMPANY:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
