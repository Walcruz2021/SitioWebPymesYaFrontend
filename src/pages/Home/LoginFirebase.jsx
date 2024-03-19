import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBarBoostrap";
import FormsRegister from "../../forms/FormsRegister";
import FormsLogin from "../../forms/FormsLogin";
import "./LoginFirebase.css";
import { auth } from "../../hooks/configFirebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { validationAddService, addCompanyService } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import CardEditService from "./CardEditService";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import FormAddService from "../../forms/FormAddService"
import "./ClassGeneralWeb.css";

function LoginFirebase() {
  const history = useHistory();
  const [userState, setUserState] = useState(null);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userDataName);
  const validation = useSelector((state) => state.validation);

  useEffect(() => {
    const onsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setUserState(null);
        localStorage.removeItem("user");
      }
    });
    return () => onsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (userState && userState.email) {
      dispatch(validationAddService(userState.email));
    }
  }, [dispatch, userState]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesion", error.message);
    }
  };


  // const addNote = () => {
  //   return (
  //     <FormAddService user={userState.displayName} email={userState.email} />
  //   );
  // };
  const CardAddEditService = () => {
    console.log("click");
    history.push("/addEditService");
  };
  return (
    <>
      {userState ? (
        <>
          {/* 1 SERVICIO PERMITIDO */}
          {validation.status === 200 && validation.data.search ? (
            // <FormEditService dataUser={userState.displayName}
            // email={userState.email}
            // phone={validation.data.search[0].phone}
            // phone2={validation.data.search[0].phone2}
            // notesComp={validation.data.search[0].notesComp}
            // address={validation.data.search[0].address}
            // idCompany={validation.data.search[0]._id}
            // />
            history.push("/addEditService")
            // <>
            //   <NavBarBoostrapLogin user={userLogin} />
            //   <h3>Solo puedes agregar 1 servicio mas y editar le otro</h3>
            //   <button onClick={CardAddEditService}>addEditService</button>
            //   <ButtonBarBoostrap />
            // </>
          ) : // NINGUN SERVICIO PERMITIDO
          validation.status === 201 && validation.data.search ? history.push("/editServices") : validation.status === 205 && validation.data.search ? (
            history.push("/addService")
          ) : null}
        </>
      ) : (
        <>
          <NavBar />
          <div className="containerGlobalWeb">
            <FormsRegister />
            <FormsLogin />
          </div>
          <ButtonBarBoostrap />
        </>
      )}
    </>
  );
}
export default LoginFirebase;
//https://www.youtube.com/watch?v=Djh_eVj0D2w&t=2610s&ab_channel=Fazt