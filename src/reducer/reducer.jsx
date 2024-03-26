import {
  ADD_SERVICE,
  VALIDATION_ADDSERVICE,
  EDIT_SERVICE,
  GET_USER,
  GET_COMPANY_BYUSER,
  ADD_USER_SERVICE,
  DELETE_SERVICE,
  SEARCH_USER
} from "./actions";

const initialState = {
  validation: [],
  userDataName: null,
  userDataEmail: null,
  companiesByUser: null,
  userEmailSearch: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userDataName: action.payload.displayName,
        userDataEmail: action.payload.email,
      };

    case SEARCH_USER:
      return {
        ...state,
        userEmailSearch: action.payload,
      };
      
    case ADD_USER_SERVICE:
      return {
        ...state,
      };

    case ADD_SERVICE:
      return {
        ...state,
      };

    case VALIDATION_ADDSERVICE:
      return {
        ...state,
        validation: action.payload,
      };
    case EDIT_SERVICE:
      return {
        ...state,
      };
    case DELETE_SERVICE:
      return {
        ...state,
      };
    case GET_COMPANY_BYUSER:
      return {
        ...state,
        companiesByUser: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
