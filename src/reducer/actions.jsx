import axios from "axios";
export const ADD_SERVICE = "ADD_SERVICE";
export const VALIDATION_ADDSERVICE = "VALIDATION_ADDSERVICE";
export const EDIT_COMPANY="EDIT_COMPANY"

export function addCompanyService(newService) {
  return async function (dispatch) {
    try {
      const serviceAdd = await axios.post(
        "http://localhost:3002/api/addCompany",
        newService
      );
      dispatch({
        type: ADD_SERVICE,
        payload: serviceAdd.data // Puedes ajustar este campo según la estructura de respuesta de tu servidor
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
        `http://localhost:3002/api/verificationAddService/${userCompany}`
      );
      console.log(response)
      const validation = response; // Ajusta según la estructura de respuesta de tu servidor
      dispatch({
        type: VALIDATION_ADDSERVICE,
        payload: validation
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function editCompanyService(idCompany,editService) {
console.log(editService)
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `http://localhost:3002/api/editService/${idCompany}`,editService
      );
      const validation = response; // Ajusta según la estructura de respuesta de tu servidor
      dispatch({
        type: EDIT_COMPANY,
        payload: validation
      });
    } catch (error) {
      console.log(error);
    }
  };
}
