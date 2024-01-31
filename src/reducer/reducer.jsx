import { ADD_SERVICE } from "./actions";

const initialState = {
  allCompanies: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
