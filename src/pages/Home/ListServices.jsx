import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import FormAddService from "../../forms/FormAddService"
import CardAddEditService from "../Home/CardAddEditService"
import CardEditServices from "../Home/CardEditServices"
const ListServices = () => {

  const validation = useSelector((state) => state.reducer.validation);


  if (!validation) {
    return <div>Cargando...</div>; // O un spinner
  }
  return <div>{validation && validation.status===205 ? <FormAddService/>: validation&&validation.status===200 ? <CardAddEditService/>:<CardEditServices validation={validation}/>}</div>
};

export default ListServices;
