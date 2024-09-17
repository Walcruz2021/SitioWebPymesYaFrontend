import "./CardAddEditService.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import addServ from "../../icons/iconAddNote.png";
import editServ from "../../icons/editService.png";
import { validationAddService } from "../../reducer/actions";
import "../../css/ClassGeneralWeb.css";
import FormAddService from "../../forms/FormAddService";
import CardEditService from "./CardEditService";
import { useNavigate } from "react-router-dom";

const CardAddEditService = () => {
  const navigate = useNavigate();
  const [buttonActived, seButtonActived] = useState(true);
  const [formAddServiceActived, seFormAddActived] = useState(false);
  const [formEditServiceActived, setFormEditServiceActived] = useState(false);
  const [stateButtonback, setStateButtonBack] = useState(false);
  const emailLogin = useSelector((state) => state.userDataEmail);
  //const serviceUser = useSelector((state) => state.validation.data.search);
  const serviceUser = useSelector((state) => state.validation.data.search);
  //console.log(serviceUser)
  const validation = useSelector((state) => state.validation);
  console.log(validation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailLogin) {
      dispatch(validationAddService(emailLogin));
    }
  }, [dispatch]);

  const changeStateAdd = () => {
    seButtonActived(false);
    seFormAddActived(true);
    setStateButtonBack(true);
    setFormEditServiceActived(false);
  };

  const changeStateEdit = () => {
    seButtonActived(false);
    setFormEditServiceActived(true);
    setStateButtonBack(true);
    seFormAddActived(false);
    navigate(`/editService/${serviceUser[0]._id}`);
  };

  const changeBack = () => {
    seButtonActived(true);
    setStateButtonBack(false);
    setFormEditServiceActived(false);
    seFormAddActived(false);
  };
  return (
    <>
      {buttonActived ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="containerCard">
            <button>
              <img
                className="imgCard"
                src={addServ}
                alt="icon add service"
                onClick={() => changeStateAdd()}
              />
            </button>

            <button>
              <img
                className="imgCard"
                src={editServ}
                alt="icon add service"
                onClick={() => changeStateEdit()}
              />
            </button>
          </div>
        </div>
      ) : formAddServiceActived ? (
        <>
          <div className="containerGlobalWeb">
            <div className="container">
              <button
                className="btn btn-outline-secondary"
                onClick={() => changeBack()}
              >
                Volver
              </button>
            </div>
          </div>
          <FormAddService />
        </>
      ) : (
        <>
          <button onClick={() => changeBack()}>BACK</button>
        </>
      )}
    </>
  );
};

export default CardAddEditService;

{
  /* {serviceUser? serviceUser.map((serv) => (
           <Link to={`/editService/${serv._id}`}>
             <button>
               <img
                 className="imgCard"
                 src={editServ}
                 alt="icon edit service"
               />
             </button>
           </Link>
         ))
       : null} */
}
