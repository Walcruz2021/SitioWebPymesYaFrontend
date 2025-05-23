

import {
  GET_USER,
  GET_COMPANY_BYUSER,
  ADD_USER_SERVICE,
  SEARCH_USER,
  RESET_USER,
} from "../actions/actionUser";

const initialState = {
  validation: [],
  userDataName: null,
  userDataEmail: null,
  companiesByUser: null,
  userEmailSearch: null,
  listCategories: [],
  listNewsPaper: [],
};

const reducerUser = (state = initialState, action) => {
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
    case GET_COMPANY_BYUSER:
      return {
        ...state,
        companiesByUser: action.payload,
      };

    case RESET_USER:
      return {
        ...state,
        userDataName: null,
        userDataEmail: null,
      };

    default:
      return state;
  }
};

export default reducerUser;
