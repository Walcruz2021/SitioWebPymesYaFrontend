import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBarBoostrap";
import FormsRegister from "../../forms/FormsRegister";
import FormsLogin from "../../forms/FormsLogin";
import "./LoginFirebase.css";
import { auth } from "../../hooks/configFirebase";
import { signOut } from "firebase/auth";
import { validationAddService, getUserLogin } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "../../css/ClassGeneralWeb.css";

function LoginFirebase() {
  const history = useHistory();

  const [loginUser, setLoginUser] = useState(null);

  const [autUser, setAuthUser] = useState(false);

  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const validation = useSelector((state) => state.validation);
  console.log(validation);

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified, displayName } = userCred;
        setLoginUser({ email, emailVerified, displayName });
      }
    });
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(validationAddService(loginUser.email));
      dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesion", error.message);
    }
  };

  return (
    <>
      {loginUser && loginUser.emailVerified ? (
        //user logged in and email verified
        validation.status === 205 ? (
          //"add all service allowed (status 205) "
          //<h1>todos los servicios DISPONIBLES {validation.status}</h1>
          history.push("/addService")
        ) : validation.status === 201 && validation.data.search ? (
          history.push("/editServices")
          // <h1>NO HAY SERVICIOS DISPONIBLES {validation.status}</h1>
        ) : validation.status === 200 && validation.data.search ? (
          history.push("/addEditService")
          // <h1>UN SERVICIO DISPONIBLES {validation.status}</h1>
        ) : null
      ) : (
        //user NOT email verified or NOT logger id
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
