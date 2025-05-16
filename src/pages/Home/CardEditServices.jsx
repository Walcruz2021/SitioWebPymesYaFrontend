import React, { useState } from "react";
import { useEffect } from "react";
import {
  validationAddService,
  addCompanyService,
} from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import CardEditService from "./CardEditService";
import { getUserLogin } from "../../store/actions/actionUser";

const CardEditServices = ({data}) => {

  const emailLogin = useSelector((state) => state.reducerUser.userDataEmail);

  const validation = useSelector((state) => state.reducer.validation)


  const [listServices, setListServices] = useState([]);


  useEffect(() => {
    if (validation && validation.data && validation.data.search) {
      setListServices(validation.data.search);
    }
  }, [listServices]);

   if (!validation) {
    return <div>Cargando...</div>; // O un spinner
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="containerCard">
        {listServices ?
           listServices.map((serv) => (
              <React.Fragment key={serv._id}>
                <CardEditService idServ={serv._id} />
              </React.Fragment>
            ))
          : <h1>...Loading</h1>}
      </div>
    </div>
  );
};

export default CardEditServices;
