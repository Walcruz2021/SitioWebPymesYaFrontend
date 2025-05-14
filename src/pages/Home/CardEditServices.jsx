import React, { useState } from "react";
import { useEffect } from "react";
import {
  validationAddService,
  addCompanyService,
} from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import CardEditService from "./CardEditService";
import { getUserLogin } from "../../store/actions/actionUser";

const CardEditServices = () => {
  const emailLogin = useSelector((state) => state.reducerUser.userDataEmail);

  const serviceUser = useSelector((state) => state.reducer.validation.data);

  const dispatch = useDispatch();
  const validation = useSelector((state) => state.reducer.validation);

  const [listServices, setListServices] = useState([]);

  useEffect(() => {
    dispatch(getUserLogin());
  }, [dispatch]);

  useEffect(() => {
    if (emailLogin) {
      dispatch(validationAddService(emailLogin));
    }
  }, [dispatch, emailLogin]);

  useEffect(() => {
    if (serviceUser && serviceUser.search) {
      setListServices(serviceUser.search);
    }
  }, [listServices]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="containerCard">
        {serviceUser && serviceUser.search
          ? serviceUser.search.map((serv) => (
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
