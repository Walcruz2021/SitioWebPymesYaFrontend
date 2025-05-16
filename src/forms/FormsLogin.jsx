import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../src/hooks/configFirebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { validationAddService } from "../store/actions/actions";

import { addUser, listenToAuthChanges } from "../store/actions/actionUser";

import ModalRestPassword from "../modals/ModalRestPassword";
import "./FormsLoginAndRegister.css";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import logoNew from "../../src/icons/LogoNew.png";

function FormsLogin({ autUser }) {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [stateValue, setStateValue] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(auth, provider);
    const emailUserNew = credentials.user.email;
    const fullNameUserNew = credentials.user.displayName;
    const newUserService = {
      fullName: fullNameUserNew,
      status: true,
      email: emailUserNew,
    };
    dispatch(addUser(newUserService));
    try {
      onAuthStateChanged(auth, async (user) => {
        console.log(user);
      });
    } catch (error) {
      console.log(error.message, error.code);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleSumbit = async (e) => {
    if (stateValue.email.trim() === "" || stateValue.password.trim() === "") {
      MySwal.fire({
        title: "Error Login",
        text: "Usuario o Contraseña Incorrecto",
        icon: "warning",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "rgb(255, 140, 0)",
      });
    } else {
      try {
        await signInWithEmailAndPassword(
          auth,
          stateValue.email,
          stateValue.password
        );
        if (auth.currentUser.emailVerified) {
          MySwal.fire({
            title: "¡Usuario Logueado Correctamente!",
            icon: "success",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "rgb(21, 151, 67)",
          }).then(async (result) => {
            if (result.isConfirmed) {
              dispatch(validationAddService(stateValue.email));
              dispatch(listenToAuthChanges());
              navigate("/listServices")
            }
          });
        } else {
          MySwal.fire({
            title: "¡Correo electrónico no verificado!",
            text: "Por favor, verifica tu correo electrónico para continuar.",
            icon: "warning",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "rgb(255, 140, 0)",
          });
          //resetForm();
        }
      } catch (error) {
        if (error.code === "auth/invalid-credential") {
          MySwal.fire({
            title: "Error Login",
            text: "Usuario o Contraseña Incorrecto",
            icon: "warning",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "rgb(255, 140, 0)",
          });
        } else if (error.code === "auth/invalid-email") {
          MySwal.fire({
            title: "Error Login",
            text: "Debe Ingresar un Email",
            icon: "warning",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "rgb(255, 140, 0)",
          });
        } else {
          console.log(error.message);
        }
      }
    }
  };

  // const resetForm = () => {
  //   setStateValue({
  //     email: "",
  //     password: "",
  //   });
  // };

  const RedirectLink = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="login-wrap">
        <div className="login-html">
          <div className="logoForm text-center">
            <img src={logoNew} style={{ width: "185px" }} alt="logo" />

            <h4 className="titGral mt-1 mb-3 pb-1">LOGIN AL SISTEMA</h4>
          </div>

          <div className="login-form">
            <div className="group">
              <label className="form-label pt-3 pb-1">
                <FaUser /> CORREO ELECTRONICO
              </label>
              <MDBInput
                className="form-input mb-2"
                id="form1"
                type="email"
                name="email"
                value={stateValue.email}
                onChange={handleChange}
                required
              />
              <label className="form-label pt-3 pb-1 .anton-sc-regular">
                <RiLockPasswordFill /> PASSWORD
              </label>
              <MDBInput
                className="form-input mb-2"
                id="form2"
                type="password"
                name="password"
                value={stateValue.password}
                onChange={handleChange}
                required
              />
              <div className="pt-2">
                {!stateValue.email || !stateValue.password ? (
                  <button
                    className="btn btn-outline-dark form-button"
                    type="submit"
                    onClick={handleSumbit}
                    disabled
                  >
                    Inicio de Sesión
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-dark form-button"
                    type="submit"
                    onClick={handleSumbit}
                  >
                    Inicio de Sesión
                  </button>
                )}
              </div>

              {/* this code is commented because it does not work correctly */}
              {/* <div className="pt-2"></div>
              <button
                className="btn btn-outline-dark form-button"
                onClick={loginGoogle}
              >
                <FaGoogle />
              </button> */}

              <div className="pt-3">
                <ModalRestPassword show={show} setShow={setShow} />
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-1 pt-3">
                <p className="mb-0 px-2">¿No tiene una cuenta?</p>
                <button
                  className="btn btn-outline-secondary btn-custom"
                  onClick={RedirectLink}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormsLogin;

// import { Formik, Field, ErrorMessage, Form } from "formik";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged
// } from "firebase/auth";
// import { auth } from "../hooks/configFirebase";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import ModalRestPassword from "../modals/ModalRestPassword";
// import { addUserService } from "../reducer/actions";
// import { useDispatch } from "react-redux";

// function FormsLogin({ autUser }) {
//   const MySwal = withReactContent(Swal);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   //logIn with email of gmail
//   const loginGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     const credentials = await signInWithPopup(auth, provider);
//     const emailUserNew = credentials.user.email;
//     const fullNameUserNew = credentials.user.displayName;
//     const newUserService = {
//       fullName: fullNameUserNew,
//       status: true,
//       email: emailUserNew,
//     };
//     dispatch(addUserService(newUserService));
//     try {
//       onAuthStateChanged(auth, async (user) => {
//         console.log(user);
//       });
//     } catch (error) {
//       console.log(error.message, error.code);
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="titGral">
//           <h2 className="mt-5">FORMULARIO DE INICIO DE SESION</h2>
//         </div>
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validate={(values) => {
//             const error = {};

//             if (!values.email) {
//               error.email = "Por favor ingresa un correo";
//             } else if (
//               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//             ) {
//               error.email = "Correo inválido";
//             }

//             if (!values.password) {
//               error.password = "Por favor ingresa una contraseña";
//             }
//             // Letras, números, guion y guion_bajo-Mayúsculas SIN espacios
//             else if (
//               !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`]{6,15}$/.test(
//                 values.password
//               )
//             ) {
//               error.password =
//                 "Debe tener entre 6 y 15 caracteres. Sin espacios.";
//             }
//             return error;
//           }}
//           onSubmit={async (values, { resetForm }) => {
//             try {
//               await signInWithEmailAndPassword(
//                 auth,
//                 values.email,
//                 values.password
//               );
//               if (auth.currentUser.emailVerified) {
//                 // Usuario logueado correctamente y correo electrónico verificado
//                 MySwal.fire({
//                   title: "¡Usuario Logueado Correctamente!",
//                   icon: "success",
//                   confirmButtonText: "Aceptar",
//                   confirmButtonColor: "rgb(21, 151, 67)",
//                 }).then((result) => {
//                   if (result.isConfirmed) {
//                     navigate.push({ pathname: "/addService" });
//                   }
//                 });
//               } else {
//                 MySwal.fire({
//                   title: "¡Correo electrónico no verificado!",
//                   text: "Por favor, verifica tu correo electrónico para continuar.",
//                   icon: "warning",
//                   confirmButtonText: "Aceptar",
//                   confirmButtonColor: "rgb(255, 140, 0)",
//                 });
//                 resetForm();
//               }
//             } catch (error) {
//               if (error.code === "auth/invalid-credential") {
//                 MySwal.fire({
//                   title: "Error Login",
//                   text: "Usuario o Contraseña Incorrecto",
//                   icon: "warning",
//                   confirmButtonText: "Aceptar",
//                   confirmButtonColor: "rgb(255, 140, 0)",
//                 });
//               } else {
//                 console.log(error.message);
//               }
//             }
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//             /* and other goodies */
//           }) => (
//             <Form onSubmit={handleSubmit}>
//               <div className="mt-2">
//                 <label className="form-label">Email</label>
//                 <Field type="email" name="email" className="form-control" />
//                 <ErrorMessage
//                   name="email"
//                   component={() => <div className="error">{errors.email}</div>}
//                 ></ErrorMessage>
//               </div>

//               <div className="mt-2">
//                 <label htmlFor="password" className="form-label">
//                   Contraseña
//                 </label>
//                 <Field
//                   type="password"
//                   name="password"
//                   className="form-control mt-2"
//                 />

//                 <ErrorMessage
//                   name="password"
//                   component={() => (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 ></ErrorMessage>
//               </div>

//               <ModalRestPassword />

//               <div className="mt-4">
//                 {values.email &&
//                 values.password &&
//                 !errors.password &&
//                 !errors.email ? (
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="form-control btn btn-lg btn-secondary"
//                   >
//                     Inicio de Sesión
//                   </button>
//                 ) : (
//                   <button
//                     disabled
//                     className="form-control btn btn-lg btn-secondary"
//                   >
//                     Inicio de Sesión
//                   </button>
//                 )}
//               </div>
//             </Form>
//           )}
//         </Formik>
//         <div className="mt-4">
//           <button
//             onClick={loginGoogle}
//             className="form-control btn btn-lg btn-secondary"
//           >
//             Login Gmail
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FormsLogin;
