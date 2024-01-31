import axios from "axios"
export const ADD_SERVICE="ADD_SERVICE"

export default function addCompanyService(newService) {
    console.log(newService,"---->ACTIONS")
//   return async function (dispatch) {
//     try {
//       const serviceAdd = await axios.post("http://localhost:3002/api/addCompany",newService);
//       return serviceAdd;
//     } catch (error) {
//       console.log(error);
//     }
//   };
}
