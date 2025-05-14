import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../src/hooks/configFirebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addUser } from "../store/actions/actionUser";
// import "../../css/cssGeneral.css";
import "./FormsLoginAndRegister.css";
import { MDBInput } from "mdb-react-ui-kit";
import { FaGoogle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import logoNew from "../../src/icons/LogoNew.png";
import { FaUser } from "react-icons/fa";

function FormRegister({ autUser }) {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [stateValue, setStateValue] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    passwordDuplicated: "",
  });

  const [emailState, setEmailState] = useState("");
  const [validationEmail, setValidationEmail] = useState(false);
  const [validationPassw, setValidationPassw] = useState(false);
  const [validationName, setValidationName] = useState(true);
  const [validationLastName, setValidationLastName] = useState(false);
  const [isInputFocusedName, setIsInputFocusedName] = useState(false);
  const [isInputFocusedLastName, setIsInputFocusedLastName] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const loginGoogle = async () => {
    if (isPopupOpen) return;
    setIsPopupOpen(true);
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      const emailUserNew = credentials.user.email;
      const fullNameUserNew = credentials.user.displayName;
      const newUserService = {
        fullName: fullNameUserNew,
        status: true,
        email: emailUserNew,
      };
      dispatch(addUser(newUserService));
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // navigate("/");
        }
      });
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsPopupOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setStateValue({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      passwordDuplicated: "",
    });
    setEmailState("");
    setValidationEmail(false);
    setValidationPassw(false);
    setValidationName(true);
    setValidationLastName(false);
    setIsInputFocusedName(false);
    setIsInputFocusedLastName(false);
  };

  const handleSumbit = async (e) => {
    if (
      stateValue.password.trim() === "" ||
      stateValue.passwordDuplicated.trim() === "" ||
      stateValue.firstName.trim() === "" ||
      stateValue.lastName.trim() === ""
    ) {
      MySwal.fire({
        title: "Error Datos",
        text: "Faltan Datos Por Completar",
        icon: "warning",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "rgb(255, 140, 0)",
      });
    } else {
      try {
        await createUserWithEmailAndPassword(
          auth,
          emailState,
          stateValue.password
        ).then(async (userCred) => {
          const user = userCred.user;
          await sendEmailVerification(user);
          await updateProfile(user, {
            displayName: `${stateValue.firstName} ${stateValue.lastName}`,
          });
        });

        const newUser = {
          fullName: `${stateValue.firstName} ${stateValue.lastName}`,
          status: true,
          email: emailState,
        };
        dispatch(addUser(newUser));
        MySwal.fire({
          title: "¡Usuario Creado. Se envió un Link de Verificación!",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "rgb(21, 151, 67)",
        }).then((result) => {
          if (result.isConfirmed) {
            resetForm(); // Reiniciar el formulario aquí
            navigate("/login");
          }
        });
      } catch (error) {
        console.error(error.code, error.message);
        if (error.code === "auth/weak-password") {
          alert("password has few characters");
        } else if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Email ya se encuentra Registrado",
          });
        }
      }
    }
  };

  const RedirectLink = () => {
    //alert("se activo esto")
    navigate("/login");
  };

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmailState(newEmail);

    if (newEmail) {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setValidationEmail(emailPattern.test(newEmail));
    }
  };

  const handleChangeName = (event) => {
    const newData = event.target.value;
    setStateValue((prevState) => ({
      ...prevState,
      firstName: newData,
    }));
    setValidationName(newData.length > 4);
  };

  const handleChangeLastName = (event) => {
    const newData = event.target.value;
    setStateValue((prevState) => ({
      ...prevState,
      lastName: newData,
    }));
    setValidationLastName(newData.length > 4);
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setStateValue((prevState) => ({
      ...prevState,
      password: newPassword,
    }));
    validatePasswords(newPassword, stateValue.passwordDuplicated);
  };

  const handleChangePasswordDuplicated = (event) => {
    const newPasswordDuplicated = event.target.value;
    setStateValue((prevState) => ({
      ...prevState,
      passwordDuplicated: newPasswordDuplicated,
    }));
    validatePasswords(stateValue.password, newPasswordDuplicated);
  };

  const validatePasswords = (password1, password2) => {
    setValidationPassw(password1 === password2);
  };

  const handleFocusName = () => {
    setIsInputFocusedName(true);
  };

  const handleFocusLastName = () => {
    setIsInputFocusedLastName(true);
  };

  return (
    <>
      <div className="p-1">
        <div className="login-wrap-reg">
          <div className="login-html">
            <div className="logoForm text-center">
              <img src={logoNew} style={{ width: "185px" }} alt="logo" />

              <h4 className="titGral mt-1 mb-3 pb-1">REGISTRO AL SISTEMA</h4>
            </div>

            <label className="form-label">Nombre *</label>

            <MDBInput
              className="small"
              wrapperClass="mb-2"
              type="text"
              name="firstName"
              maxLength="30"
              onFocus={handleFocusName}
              onChange={handleChangeName}
            />
            {!validationName && isInputFocusedName && (
              <div className="text-danger msgAlertInput">Mayor a 4 letras</div>
            )}

            <label className="form-label">Apellido *</label>

            <MDBInput
              className="small"
              wrapperClass="mb-2"
              type="text"
              name="lastName"
              maxLength="30"
              onChange={handleChangeLastName}
              onFocus={handleFocusLastName}
            />
            {!validationLastName && isInputFocusedLastName && (
              <div className="text-danger msgAlertInput">Mayor a 4 letras</div>
            )}

            <label className="form-label pt-2">
              <FaUser /> CORREO ELECTRONICO *
            </label>

            <MDBInput
              className="small"
              wrapperClass="mb-2"
              type="email"
              name="email"
              maxLength="50"
              onChange={handleChangeEmail}
            />
            {!validationEmail && (
              <div className="text-danger msgAlertInput">
                Debe ingresar Email
              </div>
            )}

            <label className="form-label pt-2">
              <RiLockPasswordFill /> PASSWORD *
            </label>

            <MDBInput
              wrapperClass="mb-2"
              type="password"
              name="password"
              maxLength="30"
              value={stateValue.password}
              onChange={handleChangePassword}
            />

            <label className="form-label pt-2">
              <RiLockPasswordFill /> REINGRESE PASSWORD *
            </label>

            <MDBInput
              wrapperClass="mb-2"
              type="password"
              name="passwordDuplicated"
              maxLength="30"
              onChange={handleChangePasswordDuplicated}
            />
            {!validationPassw && (
              <div className="text-danger msgAlertInput">
                Las Contraseñas deben ser iguales
              </div>
            )}

            <div className="pt-1">
              {!stateValue.firstName.trim("") ||
              !stateValue.lastName.trim("") ||
              !validationLastName ||
              !validationEmail ||
              !validationPassw ||
              !validationName ? (
                <button
                  className="btn btn-outline-dark form-button mt-1"
                  type="submit"
                  onClick={handleSumbit}
                  disabled
                >
                  Registrarse
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark form-button"
                  type="submit"
                  onClick={handleSumbit}
                >
                  Registrarse
                </button>
              )}
            </div>
            {/* this code is commented because it does not work correctly*/}
            {/* <div className="pt-2">
          <button
            className="btn btn-outline-dark form-button"
            onClick={loginGoogle}
          >
            <FaGoogle />
          </button>
        </div> */}

            <div className="d-flex flex-row align-items-center justify-content-center pb-2 mb-1 pt-3">
              <p className="mb-0 px-2">Ya tiene una cuenta?</p>
              <button
                outline
                className="btn btn-outline-secondary"
                onClick={RedirectLink}
              >
                Inicio de Sesión
              </button>
            </div>
            <div className="text-danger msgAlertInput">
              (*) Campos Obligatorios
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default FormRegister;

// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Formik, Field, ErrorMessage, Form } from "formik";
// //import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// import { auth } from "../hooks/configFirebase";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   getAuth,
//   sendEmailVerification,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { addUserService } from "../reducer/actions";
// import alertToastify from "../hooks/alertToastify";
// import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { useNavigate } from "react-router-dom";

// function FormsRegister() {
//   const navigate = useNavigate();
//   const MySwal = withReactContent(Swal);
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null);

//   //const notify = () => toast("Wow so easy!");

//   // useEffect(() => {
//   //   auth.onAuthStateChanged((userCred) => {
//   //     if(userCred){
//   //       const { email, emailVerified } = userCred;
//   //       setUser({ email, emailVerified });
//   //     }
//   //   });
//   // },[]);
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
//           <h2>FORMULARIO DE REGISTRO</h2>
//         </div>
//         <Formik
//           initialValues={{
//             firstName: "",
//             lastName: "",
//             email: "",
//             password: "",
//           }}
//           validate={(values) => {
//             const error = {};
//             if (!values.firstName) {
//               error.firtsName = "por favor ingresa nombre";
//               //acentos sin caracteres especiales con espacio al final
//             } else if (
//               !/^\s*[a-zA-ZÀ-ÿ](?:\s*[a-zA-ZÀ-ÿ]){3,15}\s*$/.test(
//                 values.firstName
//               )
//             ) {
//               error.firstName = "Máximo 15 carácteres";
//             }

//             if (!values.lastName) {
//               error.lastName = "por favor ingresa apellido";
//             } else if (!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(values.lastName)) {
//               error.lastName =
//                 "el apellido sin espacios ni carácteres especiales";
//             }

//             if (!values.email) {
//               error.email = "por favor ingresa correo";
//             } else if (
//               !/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i.test(
//                 values.email
//               )
//             ) {
//               error.email = "correo inválido";
//             }

//             if (!values.password) {
//               error.password = "por favor ingresa contraseña";
//             }
//             //Letras, numeros, guion y guion_bajo-Mayusculas SIN espacios
//             else if (
//               !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`]{6,15}$/.test(
//                 values.password
//               )
//             ) {
//               error.password = "min 6 caracteres máximo 15. Sin espacios";
//             }

//             return error;
//           }}
//           onSubmit={async (values, { resetForm }) => {
//             try {
//               await createUserWithEmailAndPassword(
//                 auth,
//                 values.email,
//                 values.password
//               ).then(async (userCred) => {
//                 const user = userCred.user;
//                 await sendEmailVerification(user);
//                 await updateProfile(user, {
//                   displayName: `${values.firstName} ${values.lastName}`,
//                 });
//               });

//               const newUserService = {
//                 fullName: `${values.firstName} ${values.lastName}`,
//                 // phone:values.phone,
//                 // phone2:values.phone2,
//                 //country: "Argentina",
//                 //cityName: "Salta",
//                 //address: values.address,
//                 status: true,
//                 email: values.email,
//               };
//               dispatch(addUserService(newUserService));
//               MySwal.fire({
//                 title: "¡Usuario Creado. Se envió un Link de Verificación!",
//                 icon: "success",
//                 confirmButtonText: "Aceptar",
//                 confirmButtonColor: "rgb(21, 151, 67)",
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                   // navigate.pushState({
//                   //   pathname:"/login"
//                   // })
//                   window.location.reload();
//                 }
//               });
//             } catch (error) {
//               console.error(error.code, error.message);
//               if (error.code === "auth/weak-password") {
//                 //alertToastify();
//                 alert("password has few characters");
//               } else if (error.code === "auth/email-already-in-use") {
//                 Swal.fire({
//                   icon: "error",
//                   title: "Oops...",
//                   text: "El Email ya se encuentra Registrado",
//                   // footer: '<a href="#">Why do I have this issue?</a>'
//                 });
//               }
//             }
//             resetForm();
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
//               <label className="form-label">Nombre</label>

//               <Field type="text" name="firstName" className="form-control" />

//               <ErrorMessage
//                 name="firstName"
//                 component={() => (
//                   <div className="error">{errors.firstName}</div>
//                 )}
//               ></ErrorMessage>

//               <label className="form-label">Apellido</label>

//               <Field type="text" name="lastName" className="form-control" />

//               <ErrorMessage
//                 name="lastName"
//                 component={() => <div className="error">{errors.lastName}</div>}
//               ></ErrorMessage>

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
//                 ></Field>
//                 <ErrorMessage
//                   name="password"
//                   component={() => (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 />
//               </div>

//               <div className="mt-4">
//                 {values.email &&
//                 !errors.email &&
//                 values.password &&
//                 !errors.password &&
//                 values.firstName &&
//                 !errors.firstName &&
//                 values.lastName &&
//                 !errors.lastName ? (
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="form-control btn btn-lg btn-primary"
//                   >
//                     Registrarse
//                   </button>
//                 ) : (
//                   <button
//                     type="submit"
//                     disabled
//                     className="form-control btn btn-lg btn-primary"
//                   >
//                     Registrarse
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
//             Registrarse con Gmail
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FormsRegister;
