import axios from "axios";
import rutaBackend from "../helpers/rutaBackend";
import { auth } from "../hooks/configFirebase";
export const ADD_SERVICE = "ADD_SERVICE";
export const VALIDATION_ADDSERVICE = "VALIDATION_ADDSERVICE";
export const EDIT_SERVICE = "EDIT_SERVICE";
export const GET_USER = "GET_USER";
export const GET_COMPANY_BYUSER = "GET_COMPANY_BYUSER";
export const ADD_USER_SERVICE="ADD_USER_SERVICE"

export function addUserService(newUserService) {
  console.log(newUserService)
  return async function (dispatch) {
    try {
      const newUserServ = axios.post(
        `${rutaBackend}/api/addUserService`,
        newUserService
      );
      dispatch({
        type:ADD_USER_SERVICE,
        payload:newUserServ.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCompanyService(newService) {
  console.log(newService.email)
  return async function (dispatch) {
    try {
      const serviceAdd = await axios.post(
        `${rutaBackend}/api/addService`,
        newService
      );
      dispatch({
        type: ADD_SERVICE,
        payload: serviceAdd.data, // Puedes ajustar este campo según la estructura de respuesta de tu servidor
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function validationAddService(userCompany) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${rutaBackend}/api/verificationAddService/${userCompany}`
      );
      console.log(response);
      const validation = response; // Ajusta según la estructura de respuesta de tu servidor
      dispatch({
        type: VALIDATION_ADDSERVICE,
        payload: validation,
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

export function getUserLogin() {
  return function (dispatch) {
    try {
      // Obteniendo el usuario actualmente autenticado
      const user = auth.currentUser;
      console.log(user);
      // Despachando la acción para guardar el usuario en el estado
      dispatch({
        type: GET_USER,
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

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