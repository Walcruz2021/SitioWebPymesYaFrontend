import GET_TURNOS from "./actions";

const initialState = {
  allTurnos: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TURNOS:
      return {
        ...state,
        allTurnos: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
