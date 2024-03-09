import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBarBoostrap";
import FormsRegister from "../../forms/FormsRegister";
import FormsLogin from "../../forms/FormsLogin";
import FormAddService from "../../forms/FormAddService";
import FormEditService from "../../forms/FormEditService";
import "./LoginFirebase.css";
import { auth } from "../../hooks/configFirebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { validationAddService, addCompanyService } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import iconAddNote from "../../icons/iconAddNote.png";
import CardAddEditService from "./CardAddEditService";
import CardEditService from "./CardEditService"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from 'react-router-dom';


function LoginFirebase() {
  const history = useHistory();
  const [userState, setUserState] = useState(null);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();


  // const userCompany = {
  //   username: "Walter Cruz", // Aquí deberías pasar los datos que el backend espera para validar el servicio
  // };
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

  const validation = useSelector((state) => state.validation);

  // const addNote = () => {
  //   return (
  //     <FormAddService user={userState.displayName} email={userState.email} />
  //   );
  // };

  return (
    <>
      
        {userState ? (
          <>
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
            ) : validation.status === 201 ? (
              MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Acabaste con tu Límite. Sólo puedes Editar los Servicios que tienes. Pódes elimnar y agregar un nuevo",
                // footer: '<a href="#">Why do I have this issue?</a>'
              }),
              <div> 
              
                {validation.data.search.map((serv) => (
                  <React.Fragment key={serv._id}>
                    <CardEditService idServ={serv._id} />
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <FormAddService
                user={userState.displayName}
                email={userState.email}
              />
            )}
          </>
        ) : (
          <>
            <NavBar />
            <div className="containerGlobalWeb">
              <FormsRegister />
              <FormsLogin />
            </div>
          </>
        )}
    
    </>
  );
}
export default LoginFirebase;
//https://www.youtube.com/watch?v=Djh_eVj0D2w&t=2610s&ab_channel=Fazt
