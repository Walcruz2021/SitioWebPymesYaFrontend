import axios from "axios";
import rutaBackend from "../../helpers/rutaBackend";

export const GET_NEWS_PAPER = "GET_NEWS_PAPER";
export const ADD_NEWS_PAPER = "ADD_NEWS_PAPER";

export const getNewsPaper = () => {
    return async (dispatch) => {
        const response = await axios.get(`${rutaBackend}/api/newsPaper`);

        dispatch({ type: GET_NEWS_PAPER, payload: response.data.listNews});
    };
};  

export const addNewsPaper = (newsPaper) => {
    return async (dispatch) => {
        const response = await axios.post(`${rutaBackend}/newsPaper`, newsPaper);
        dispatch({ type: ADD_NEWS_PAPER, payload: response.data });
    };
};      

