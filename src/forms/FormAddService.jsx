import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState } from "react";
//import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "../hooks/configFirebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import Select from "react-select";
import {useDispatch} from "react-redux"
import addCompanyService from "../reducer/actions"
import { onAuthStateChanged, signOut } from "firebase/auth";

const FormAddService = (fullName,email) => {

console.log(fullName)
const dispatch=useDispatch()
  const options = [
    { value: "6435bc9d6b3be033805c6f07", label: "Carpinteria" },
    { value: "6435bcb66b3be033805c6f09", label: "Herreria" },
    { value: "6435bcbe6b3be033805c6f0b", label: "Durlock" },
    { value: "6435bcc56b3be033805c6f0d", label: "Fletes" },
    { value: "6435bcce6b3be033805c6f0f", label: "Albañileria" },
    { value: "6435bf606b3be033805c6f13", label: "Plomeria" },
    { value: "6435c24c6b3be033805c6f19", label: "Electricidad" },
    { value: "6435c93b6b3be033805c6f21", label: "Pintureria" }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  //console.log(selectedOption);
  return (
    <>
      <div>
        <h2>FORMULARIO DE PRESTACION DE SERVICIO</h2>
        <Formik
          initialValues={{
            phone1:"",
            phone2:"",
            address: ""
          }}
          validate={(values) => {
            const error = {};
            // if (!values.firstName) {
            //   error.firtsName = "por favor ingresa nombre";
            // } else if (!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(values.firstName)) {
            //   error.firstName =
            //     "el nombre sin espacios ni caracteres especiales";
            // }

            // if (!values.lastName) {
            //   error.lastName = "por favor ingresa apellido";
            // } else if (!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(values.lastName)) {
            //   error.lastName =
            //     "el apellido sin espacios ni carcateres especiales";
            // }

            // if (!values.email) {
            //   error.email = "por favor ingresa correo";
            // } else if (
            //   !/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i.test(
            //     values.email
            //   )
            // ) {
            //   error.email = "correo inválido";
            // }

            // if (!values.password) {
            //   error.password = "por favor ingresa contraseña";
            // }
            // //Letras, numeros, guion y guion_bajo-Mayusculas SIN espacios
            // else if (
            //   !/^[a-zA-Z0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`]{6,12}$/.test(
            //     values.password
            //   )
            // ) {
            //   error.password = "min 6 caracteres máximo 12. Sin espacios";
            // }
            return error;
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              dispatch(addCompanyService(values))
            } catch (error) {
              console.error(error.code, error.message);
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
              <label className="form-label">Cel de Contacto</label>

              <Field type="number" name="phone1" className="form-control" />

              <ErrorMessage
                name="phone"
                component={() => <div className="error">{errors.phone1}</div>}
              ></ErrorMessage>

              <label className="form-label">Cel de Contacto Adicional</label>

              <Field type="number" name="phone2" className="form-control" />

              <ErrorMessage
                name="phone"
                component={() => <div className="error">{errors.phone2}</div>}
              ></ErrorMessage>

              <label className="form-label">Domicilio</label>

              <Field type="text" name="address" className="form-control" />

              <ErrorMessage
                name="address"
                component={() => <div className="error">{errors.address}</div>}
              ></ErrorMessage>

              <label className="form-label">Servicio</label>

              <Field type="text" name="service" className="form-control" />

              <ErrorMessage
                name="service"
                component={() => <div className="error">{errors.service}</div>}
              ></ErrorMessage>

              <label className="form-label">
                Seleccione Area de tu Servicio
              </label>
              <Select
                options={options}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
              />

              <div className="mt-4">
                {values.address  ? (
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
                    Enviar Aviso
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormAddService;
