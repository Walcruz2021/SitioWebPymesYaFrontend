import axios from "axios";
import rutaBackend from "../../helpers/rutaBackend";

export const GET_NEWS_PAPER = "GET_NEWS_PAPER";
export const ADD_NEWS_PAPER = "ADD_NEWS_PAPER";
export const GET_NEWS_PAPER_BY_ID = "GET_NEWS_PAPER_BY_ID";

export const getNewsPaper = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${rutaBackend}/api/newsPaper`);

            dispatch({
                type: GET_NEWS_PAPER,
                payload: response.data.listNews
            });

        } catch (error) {
            console.error("Error al obtener las noticias:", error);

            // dispatch({
            //     type: GET_NEWS_PAPER_ERROR,
            //     payload: error.message
            // });
        }
    };
};

export const addNewsPaper = (newsPaper) => {
    return async (dispatch) => {
        const response = await axios.post(`${rutaBackend}/newsPaper`, newsPaper);
        dispatch({ type: ADD_NEWS_PAPER, payload: response.data });
    };
};      

export const getNewsPaperById = (id) => {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${rutaBackend}/api/newsPaper/${id}`);

            dispatch({ type: GET_NEWS_PAPER_BY_ID, payload: response.data});
        } catch (error) {
            console.error("Error fetching news paper by ID:", error);
        }
    };
};
