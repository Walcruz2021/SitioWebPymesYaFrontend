import axios from "axios";
import rutaBackend from "../../helpers/rutaBackend";
import { auth } from "../../hooks/configFirebase";
export const ADD_SERVICE = "ADD_SERVICE";
export const VALIDATION_ADDSERVICE = "VALIDATION_ADDSERVICE";
export const EDIT_SERVICE = "EDIT_SERVICE";
export const GET_USER = "GET_USER";
export const GET_COMPANY_BYUSER = "GET_COMPANY_BYUSER";
export const ADD_USER_SERVICE = "ADD_USER_SERVICE";
export const DELETE_SERVICE = "DELETE_SERVICE";
export const SEARCH_USER = "SEARCH_USER";
export const GET_LIST_CATEGORIES = "GET_LIST_CATEGORIES";
export const ADD_USER = "ADD_USER";
export const VERIFICATION_COMPANY_EXISTS = "VERIFICATION_COMPANY_EXISTS";
export const RESET_USER = "RESET_USER";

export function addUserService(newUserService) {
  console.log(newUserService);
  return async function (dispatch) {
    try {
      const newUserServ = axios.post(
        `${rutaBackend}/api/addUserService`,
        newUserService
      );
      dispatch({
        type: ADD_USER_SERVICE,
        payload: newUserServ.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function editServiceUser(idService, editService) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `${rutaBackend}/api/editService/${idService}`,
        editService
      );
      const validation = response; // Ajusta según la estructura de respuesta de tu servidor
      dispatch({
        type: EDIT_SERVICE,
        payload: validation,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


//this function allow invocated when screen uddate with F5
export const getUserLogin = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: "GET_USER",
        payload: user,
      });
    }
  });
};

export function getCompanyByUser(email) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${rutaBackend}/api/getCompanyByUser`,
        email
      );
      dispatch({
        type: GET_COMPANY_BYUSER,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const listenToAuthChanges = () => (dispatch) => {
  auth.onAuthStateChanged((userCred) => {
    if (userCred) {
      const { email, emailVerified, displayName } = userCred;
      dispatch(setUser({ email, emailVerified, displayName }));
    } else {
      dispatch(setUser(null));
    }
  });
};

export const setUser = (user) => ({
  type: GET_USER,
  payload: user,
});

export function addUser(payload) {
  return async function (dispatch) {
    try {
      const newUser = await axios.post(
        //`http://localhost:3002/api/addPerro/${idClient}`,
        `${rutaBackend}/api/addService`,
        payload
      );
    } catch (error) {
      console.log(error);
    }
  };
}
