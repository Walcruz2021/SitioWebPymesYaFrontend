import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage, Form } from "formik";
//import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../hooks/configFirebase";

import alertToastify  from "../hooks/alertToastify";

function FomrsRegister() {
  //const notify = () => toast("Wow so easy!");
  return (
    <>
      <div className="pr-5 pl-5 m-10">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          // validate={(values) => {
          //   const error = {};
          //   if (!values.nombre) {
          //     // errors.nombre = "por favor ingresa nombre";
          //     console.log(values);
          //   } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
          //     // errors.nombre = "el nombre con solo letras y espacios";
          //   }

          //   if (!values.email) {
          //     // errors.email = "por favor ingresa correo";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     // errors.email = "correo invalido";
          //   }

          //   //Letras, numeros, guion y guion_bajo-espacios y Mayusculas
          //   // if (!/^[a-zA-Z0-9\_\-\s]{4,30}$/.test(values.notesTurn)) {
          //   //   errors.notesTurn =
          //   //     "30 caracteres max y no permite caracteres especiales";
          //   // }

          //   // return errors;
          // }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.name,
                values.email,
                values.password
              );
              console.log(userCredential);
            } catch (error) {
              console.error(error.code, error.message);
              if ((error.code = "auth/invalid-email")) {
                alertToastify();
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
              <label className="form-label">Apellido y Nombre:</label>
              <Field type="text" name="name" className="form-control">
                {/* <ErrorMessage
              name="email"
              component={() => <div className="error">{errors.email}</div>}
            ></ErrorMessage> */}
              </Field>

              <div className="mt-2">
                <label className="form-label">Email:</label>
                <Field type="email" name="email" className="form-control">
                  {/* <ErrorMessage
              name="email"
              component={() => <div className="error">{errors.email}</div>}
            ></ErrorMessage> */}
                </Field>
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control mt-2"
                >
                  {/* <ErrorMessage
              name="nombre"
              component={() => <div className="error">{errors.nombre}</div>}
            ></ErrorMessage> */}
                </Field>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-control btn btn-lg btn-primary"
                >
                  Registrarse
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FomrsRegister;
