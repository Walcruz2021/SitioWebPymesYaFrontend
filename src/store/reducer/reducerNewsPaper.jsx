import { GET_NEWS_PAPER, ADD_NEWS_PAPER } from "../actions/actionsNewsPaper";

const initialState = {
  listNewsPaper: [],
};

const reducerNewsPaper = (state = initialState, action) => {

  switch (action.type) {
    case GET_NEWS_PAPER:
      return { ...state, listNewsPaper: action.payload };
    default:
      return state;
  }
};

export default reducerNewsPaper;
