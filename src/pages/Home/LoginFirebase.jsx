import React, { useState } from "react";
import { useEffect } from "react";
import FormsRegister from "../../forms/FormsRegister";
import FormsLogin from "../../forms/FormsLogin";
import "./LoginFirebase.css";
import { auth } from "../../hooks/configFirebase";
import { signOut } from "firebase/auth";
import {
  validationAddService,
  getUserLogin,
} from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import "../../css/ClassGeneralWeb.css";

function LoginFirebase() {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState(null);

  const [autUser, setAuthUser] = useState(false);

  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const validation = useSelector((state) => state.reducer.validation);

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
      //dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);

  useEffect(() => {
    if (loginUser && loginUser.emailVerified && validation) {

      if (validation.status === 205) {
        navigate("/addService");
      } else if (validation.status === 201 && validation.data?.search) {
        navigate("/editServices");
      } else if (validation.status === 200 && validation.data?.search) {
        navigate("/addEditService");
      }
    }
  }, [validation, loginUser, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesion", error.message);
    }
  };

  return (
    <>
      {(!loginUser || !loginUser.emailVerified) && <FormsLogin />}

    </>
  );
}
export default LoginFirebase;
//https://www.youtube.com/watch?v=Djh_eVj0D2w&t=2610s&ab_channel=Fazt


//  {loginUser && loginUser.emailVerified ? (
//         //user logged in and email verified
//         validation.status === 205 ? (
//           //"add all service allowed (status 205) "
//           //<h1>todos los servicios DISPONIBLES {validation.status}</h1>
//           navigate("/addService")
//         ) : validation.status === 201 && validation.data.search ? (
//           navigate("/editServices")
//           // <h1>NO HAY SERVICIOS DISPONIBLES {validation.status}</h1>
//         ) : validation.status === 200 && validation.data.search ? (
//           navigate("/addEditService")
//           // <h1>UN SERVICIO DISPONIBLES {validation.status}</h1>
//         ) : null
//       ) : (
//         //user NOT email verified or NOT logger id
//         <>
     
//           <div className="p-3">
//             {/* <FormsRegister /> */}
//             <FormsLogin />
//           </div>
//         </>
//       )}