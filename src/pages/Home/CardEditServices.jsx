import React, { useState } from "react";
import { useEffect } from "react";
import { validationAddService, addCompanyService } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import CardEditService from "./CardEditService";

const CardEditServices = () => {
  const userLogin = useSelector((state) => state.userDataName);
  const emailLogin = useSelector((state) => state.userDataEmail);
  const serviceUser = useSelector((state) => state.validation.data.search);
//console.log(serviceUser)
  const dispatch = useDispatch();
  const validation = useSelector((state) => state.validation);
 
  useEffect(() => {
    if (emailLogin) {
      dispatch(validationAddService(emailLogin));
    }
  }, [dispatch]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">

      <div className="containerCard">
        {serviceUser?serviceUser.map((serv) => (
          <React.Fragment key={serv._id}>
            <CardEditService idServ={serv._id} />
          </React.Fragment>
        )):null}
      
      </div>

    </div>
  );
};

export default CardEditServices;
