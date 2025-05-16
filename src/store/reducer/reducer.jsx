import {
  ADD_SERVICE,
  VALIDATION_ADDSERVICE,
  EDIT_SERVICE,
  GET_USER,
  GET_COMPANY_BYUSER,
  ADD_USER_SERVICE,
  DELETE_SERVICE,
  SEARCH_USER,
  GET_LIST_CATEGORIES,
  ADD_USER,
  VERIFICATION_COMPANY_EXISTS,
  RESET_VALIDATION,
} from "../actions/actions";

const initialState = {
  validation: [],
  userDataName: null,
  userDataEmail: null,
  companiesByUser: null,
  userEmailSearch: null,
  listCategories: [],
  listNewsPaper: [],
};

function rootReducer(state = initialState, action) {
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
    case EDIT_SERVICE:
      return {
        ...state,
      };
    case DELETE_SERVICE:
      return {
        ...state,
      };

    case GET_LIST_CATEGORIES:
      return {
        ...state,
        listCategories: action.payload,
      };

    case VERIFICATION_COMPANY_EXISTS:
      return {
        ...state,
        arrayCompanies: action.payload,
      };

    case RESET_VALIDATION:
      return {
        ...state,
        validation: null,
      };
    default:
      return state;
  }
}

export default rootReducer;
