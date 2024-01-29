import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage, Form } from "formik";
//import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "../hooks/configFirebase";
import { createUserWithEmailAndPassword,updateProfile,getAuth } from "firebase/auth";

import alertToastify from "../hooks/alertToastify";

function FormsRegister() {
  //const notify = () => toast("Wow so easy!");
  return (
    <>
      <div>
        <h2>FORMULARIO DE REGISTRO</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const error = {};
            //   if (!values.nombre) {
            //     // errors.nombre = "por favor ingresa nombre";
            //     console.log(values);
            //   } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            //     // errors.nombre = "el nombre con solo letras y espacios";
            //   }

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
              !/^[a-zA-Z0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`]{6,12}$/.test(
                values.password
              )
            ) {
              error.password = "min 6 caracteres máximo 12. Sin espacios";
            }

            return error;
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              
              const userCredential = await createUserWithEmailAndPassword(
                auth,
                //values.name,
                values.email,
                values.password
              );
              // Accede al usuario recién creado
              const user = userCredential.user;
              await updateProfile(user, {
                displayName:values.name,
              });
              window.location.reload();
            } catch (error) {
              console.error(error.code, error.message);
              if (error.code === "auth/weak-password") {
                //alertToastify();
                alert("password has few characters");
              } else if (error.code === "auth/email-already-in-use") {
                alert("email already exists");
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
              <label className="form-label">Apellido y Nombre</label>
              <Field type="text" name="name" className="form-control">
                {/* <ErrorMessage
              name="email"
              component={() => <div className="error">{errors.email}</div>}
            ></ErrorMessage> */}
              </Field>

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
                {values.email && values.password && !errors.password ? (
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
      </div>
    </>
  );
}

export default FormsRegister;
