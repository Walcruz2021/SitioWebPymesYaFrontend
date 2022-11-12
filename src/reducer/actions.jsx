import axios from "axios";
export const GET_TURNOS = "GET_TURNOS";


export function getTurnos(payload) {
  return async function (dispatch) {
    const turnos = await axios.get(
      "https://peluqueriapichichu.onrender.com/api/getTurnos",
      {}
    );
    return dispatch({
      type: GET_TURNOS,
      payload: turnos.data.turnos,
    });
  };
}
