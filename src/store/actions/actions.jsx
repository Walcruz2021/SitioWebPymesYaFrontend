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
export const RESET_VALIDATION = "RESET_VALIDATION";

export function deleteService(idService) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `${rutaBackend}/api/deleteService/${idService}`
      );
      const deleteServ = response; // Ajusta según la estructura de respuesta de tu servidor
      dispatch({
        type: DELETE_SERVICE,
        payload: deleteServ,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCompanyService(newService) {
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

export function searchUser(email) {
  //console.log(email, "ACTION");
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${rutaBackend}/api/searchUser/${email}`
      );
      dispatch({
        payload: response,
        type: SEARCH_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getListCategories() {
  // return async function (dispatch) {
  //   try {
  //     const response=await axios.get(
  //       `${rutaBackend}/api/listCategories`
  //     )
  //     return dispatch({
  //       type:GET_LIST_CATEGORIES,
  //       payload:response
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}

export const resetValidation = () => ({
  type: RESET_VALIDATION,
});
