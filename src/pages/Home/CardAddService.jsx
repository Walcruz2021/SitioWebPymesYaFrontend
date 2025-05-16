import FormAddService from "../../forms/FormAddService";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validationAddService } from "../../store/actions/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import CardAddEditService from "./CardAddEditService";
import CardEditService from "./CardEditService";

/**
 * status 200 one service allow
 * status 201 NOT allowed add service
 * status 205 all services allow
 * @returns
 */

const CardAddService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var userEmail = useSelector((state) => state.reducerUser.userDataEmail);
  const validation = useSelector((state) => state.reducer.validation);


  // useEffect(() => {
  //   if (userEmail) {
  //     dispatch(validationAddService(userEmail));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   if (validation.status === 205) {
  //     <FormAddService />;
  //   } else if (validation.status === 200) {
  //     navigate("/addEditService");
  //   } else {
  //     navigate("/editService"); //status 201
  //   }
  // }, []);

  return (
    <>
      {/* {validation.status === 205 ? (
        <FormAddService />
      ) : validation.status === 200 ? (
        navigate("/addEditService")
      ) : (
        navigate("/editService") //status 201
      )} */}
    </>
  );
};

export default CardAddService;
