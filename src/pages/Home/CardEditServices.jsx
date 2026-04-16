import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";


import CardEditService from "./CardEditService";


const CardEditServices = ({data}) => {



  const validation = useSelector((state) => state.reducer.validation)


  const [listServices, setListServices] = useState([]);


  useEffect(() => {
    if (validation && validation.data && validation.data.search) {
      setListServices(validation.data.search);
    }
  }, [validation]);

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
