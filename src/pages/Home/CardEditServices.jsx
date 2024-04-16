import React, { useState } from "react";
import { useEffect } from "react";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import { validationAddService, addCompanyService } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import CardEditService from "./CardEditService";

const CardEditServices = () => {
  const userLogin = useSelector((state) => state.userDataName);
  const emailLogin = useSelector((state) => state.userDataEmail);
  const serviceUser = useSelector((state) => state.validation.data.search[0]);

  const dispatch = useDispatch();
  const validation = useSelector((state) => state.validation);
  console.log(validation);
  useEffect(() => {
    if (emailLogin) {
      dispatch(validationAddService(emailLogin));
    }
  }, [dispatch]);

  return (
    <>
      <NavBarBoostrapLogin user={userLogin} />
      <div className="containerCard">
       
        {validation.data.search.map((serv) => (
          <React.Fragment key={serv._id}>
            <CardEditService idServ={serv._id} />
          </React.Fragment>
        ))}
       
      </div>

      <ButtonBarBoostrap />
    </>
  );
};

export default CardEditServices;
