import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage, Form } from "formik";
//import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "../hooks/configFirebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { addUserService } from "../reducer/actions";
import alertToastify from "../hooks/alertToastify";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";

function FormsRegister() {
  const history = useHistory();
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  //const notify = () => toast("Wow so easy!");

  // useEffect(() => {
  //   auth.onAuthStateChanged((userCred) => {
  //     if(userCred){
  //       const { email, emailVerified } = userCred;
  //       setUser({ email, emailVerified });
  //     }
  //   });
  // },[]);
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
    dispatch(addUserService(newUserService));
    try {
      onAuthStateChanged(auth, async (user) => {
        console.log(user);
      });
    } catch (error) {
      console.log(error.message, error.code);
    }
  };

  return (
    <>
      <div>
        <div className="titGral">
          <h2>FORMULARIO DE REGISTRO</h2>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const error = {};
            if (!values.firstName) {
              error.firtsName = "por favor ingresa nombre";
              //acentos sin caracteres especiales con espacio al final
            } else if (
              !/^\s*[a-zA-ZÀ-ÿ](?:\s*[a-zA-ZÀ-ÿ]){3,15}\s*$/.test(
                values.firstName
              )
            ) {
              error.firstName = "Máximo 15 carácteres";
            }

            if (!values.lastName) {
              error.lastName = "por favor ingresa apellido";
            } else if (!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(values.lastName)) {
              error.lastName =
                "el apellido sin espacios ni carácteres especiales";
            }

            if (!values.email) {
              error.email = "por favor ingresa correo";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i.test(
                values.email
              )
            ) {
              error.email = "correo inválido";
            }

            if (!values.password) {
              error.password = "por favor ingresa contraseña";
            }
            //Letras, numeros, guion y guion_bajo-Mayusculas SIN espacios
            else if (
              !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`]{6,15}$/.test(
                values.password
              )
            ) {
              error.password = "min 6 caracteres máximo 15. Sin espacios";
            }

            return error;
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              ).then(async (userCred) => {
                const user = userCred.user;
                await sendEmailVerification(user);
                await updateProfile(user, {
                  displayName: `${values.firstName} ${values.lastName}`,
                });
              });

              const newUserService = {
                fullName: `${values.firstName} ${values.lastName}`,
                // phone:values.phone,
                // phone2:values.phone2,
                //country: "Argentina",
                //cityName: "Salta",
                //address: values.address,
                status: true,
                email: values.email,
              };
              dispatch(addUserService(newUserService));
              MySwal.fire({
                title: "¡Usuario Creado. Se envió un Link de Verificación!",
                icon: "success",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "rgb(21, 151, 67)",
              }).then((result) => {
                if (result.isConfirmed) {
                  // history.pushState({
                  //   pathname:"/login"
                  // })
                  window.location.reload();
                }
              });
            } catch (error) {
              console.error(error.code, error.message);
              if (error.code === "auth/weak-password") {
                //alertToastify();
                alert("password has few characters");
              } else if (error.code === "auth/email-already-in-use") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "El Email ya se encuentra Registrado",
                  // footer: '<a href="#">Why do I have this issue?</a>'
                });
              }
            }
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <label className="form-label">Nombre</label>

              <Field type="text" name="firstName" className="form-control" />

              <ErrorMessage
                name="firstName"
                component={() => (
                  <div className="error">{errors.firstName}</div>
                )}
              ></ErrorMessage>

              <label className="form-label">Apellido</label>

              <Field type="text" name="lastName" className="form-control" />

              <ErrorMessage
                name="lastName"
                component={() => <div className="error">{errors.lastName}</div>}
              ></ErrorMessage>

              <div className="mt-2">
                <label className="form-label">Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                ></ErrorMessage>
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control mt-2"
                ></Field>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>

              <div className="mt-4">
                {values.email &&
                !errors.email &&
                values.password &&
                !errors.password &&
                values.firstName &&
                !errors.firstName &&
                values.lastName &&
                !errors.lastName ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-control btn btn-lg btn-primary"
                  >
                    Registrarse
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="form-control btn btn-lg btn-primary"
                  >
                    Registrarse
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-4">
          <button
            onClick={loginGoogle}
            className="form-control btn btn-lg btn-secondary"
          >
            Registrarse con Gmail
          </button>
        </div>
      </div>
    </>
  );
}

export default FormsRegister;
