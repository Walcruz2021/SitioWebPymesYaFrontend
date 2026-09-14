import { GET_NEWS_PAPER,GET_NEWS_PAPER_BY_ID} from "../actions/actionsNewsPaper";

const initialState = {
  listNewsPaper: [],
  newpaper: null,
};

const reducerNewsPaper = (state = initialState, action) => {

  switch (action.type) {
    case GET_NEWS_PAPER:
      return { ...state, listNewsPaper: action.payload };

      case GET_NEWS_PAPER_BY_ID:
        return {
          ...state,
          newpaper: action.payload
        };
    default:
      return state;
  }
};

export default reducerNewsPaper;
