import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBarBoostrap";
import FormsRegister from "../../forms/FormsRegister";
import FormsLogin from "../../forms/FormsLogin";
import "./LoginFirebase.css";
import { auth } from "../../hooks/configFirebase";
import { signOut } from "firebase/auth";
import { validationAddService,getUserLogin } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "./ClassGeneralWeb.css";

function LoginFirebase() {
  const history = useHistory();

  const [loginUser, setLoginUser] = useState(null);
  console.log(loginUser,"--->")
  const [autUser, setAuthUser] = useState(false);

  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const validation = useSelector((state) => state.validation);
  console.log(loginUser);
  
  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified,displayName } = userCred;
        setLoginUser({ email, emailVerified,displayName });
      }
    });
  }, []);



  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(validationAddService(loginUser.email));
      dispatch(getUserLogin())
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
      {loginUser&&loginUser.emailVerified ? 
        validation.status === 200 && validation.data.search ? 
           history.push("/addEditService") : validation.status === 201 && validation.data.search ?
            history.push("/editServices"): validation.status === 205 && validation.data.search ?
              history.push("/addService"):
        <>
          <NavBar />
          <div className="containerGlobalWeb">
            <FormsRegister />
            <FormsLogin autUser={autUser}/>
          </div>
          <ButtonBarBoostrap />
        </>:null
      }
       <>
         <NavBar />
         <div className="containerGlobalWeb">
           <FormsRegister />
           <FormsLogin />
         </div>
         <ButtonBarBoostrap />
       </>
    </>
  );
}
export default LoginFirebase;
//https://www.youtube.com/watch?v=Djh_eVj0D2w&t=2610s&ab_channel=Fazt
