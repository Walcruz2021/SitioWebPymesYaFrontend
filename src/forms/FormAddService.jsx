import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompanyService,
  validationAddService,
} from "../store/actions/actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import "../css/ClassGeneralWeb.css";

const FormAddService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refreshScreen, setRefreshScreen] = useState(false);
  var userFullName = useSelector((state) => state.reducerUser.userDataName);
  const userEmail = useSelector((state) => state.reducerUser.userDataEmail); // Esto depende de cómo manejes la autenticación en Redux
  const validation = useSelector((state) => state.reducer.validation);
  const listCategories = useSelector((state) => state.reducer.listCategories);

  // useEffect(() => {
  //   dispatch(getUserLogin());
  // }, [dispatch, refreshScreen]);

  // useEffect(() => {
  //   if (userEmail) {
  //     dispatch(validationAddService(userEmail));
  //   }
  // }, [dispatch]);

  const [user, setUser] = useState("null");

  const MySwal = withReactContent(Swal);
  const options = [
    { value: "6435bcb66b3be033805c6f09", label: "Herreria" },
    { value: "6435bcc56b3be033805c6f0d", label: "Fletes" },
    { value: "6435bf606b3be033805c6f13", label: "Plomeria" },
    { value: "6435bcce6b3be033805c6f0f", label: "Albañileria" },
    { value: "6435c24c6b3be033805c6f19", label: "Electricidad" },
    { value: "6435c93b6b3be033805c6f21", label: "Pintureria" },
    // { value: "6435bc9d6b3be033805c6f07", label: "Carpinteria" },
    // { value: "6435bcbe6b3be033805c6f0b", label: "Durlock" },
  ];

  //select's state (about Category)
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="containerGlobalWeb pb-3">
        <div className="titGral">
          <h2>FORMULARIO DE PRESTACION DE SERVICIO</h2>
        </div>
        <Formik
          initialValues={{
            nameCompany: "",
            phone1: "",
            phone2: "",
            address: "",
            service: "",
          }}
          validate={(values) => {
            const error = {};

            //permite la leta ñ y letras con acentos
            if (!values.nameCompany) {
              error.nameCompany = "Por favor ingresa nombre de Empresa";
            } else if (
              !/^[a-zA-Z0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`áéíóúüñÁÉÍÓÚÜ ]{5,25}$/.test(
                values.nameCompany
              )
            ) {
              error.nameCompany =
                "Nombre de Empresa sin caracteres especiales no permitidos. Mínimo 6, Máximo 25 caracteres.";
            }

            if (!values.phone1) {
              error.phone1 = "por favor ingresa numero de telefono de contacto";
            } else if (!/^(\d{6,15})?$/.test(values.phone1)) {
              error.phone1 =
                "mínimo 6 máximo 15 carácteres. Si carácteres especiales";
            }

            if (!/^(\d{6,15})?$/.test(values.phone2)) {
              error.phone2 =
                "mínimo 6 máximo 15 carácteres. Si carácteres especiales";
            }

            //permite la leta ñ y letras con acentos
            if (!values.address) {
              error.address = "Por favor ingresa domicilio";
            } else if (
              !/^[a-zA-ZñÑ0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`áéíóúüñÁÉÍÓÚÜ ]{6,60}$/.test(
                values.address
              )
            ) {
              error.address =
                "Domicilio sin carácteres especiales. Mínimo 6, Máximo 60.";
            }

            //permite la leta ñ y letras con acentos
            if (!values.service) {
              error.service = "Por favor ingresa el servicio de tu profesión";
            } else if (
              !/^[a-zA-ZñÑ0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`áéíóúüñÁÉÍÓÚÜ ]{10,300}$/.test(
                values.service
              )
            ) {
              error.service =
                "Servicio sin caracteres especiales. Mínimo 10, Máximo 300 caracteres.";
            }
            return error;
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const addService = {
                nameCompany: values.nameCompany,
                fullName: userFullName,
                phone: values.phone1,
                phone2: values.phone2,
                address: values.address,
                Category: selectedOption.value,
                country: "Argentina",
                cityName: "Salta",
                // status: true,
                email: userEmail,
                noteService: values.service,
                condition: true,
              };
              dispatch(addCompanyService(addService));
              MySwal.fire({
                title: "¡Servicio Agregado Correctamente!",
                icon: "success",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "rgb(21, 151, 67)",
              }).then((result) => {
                if (result.isConfirmed) {
                  //console.log("SE DEBERIA ENVIAR ---LOGIN");
                  //navigate("/login");
                  resetForm();
                  dispatch(validationAddService(userEmail));
                  navigate("/listServices");
                  // if (validation.status === 200) { //de 200 a 201 (ya no le quedaria opcion)
                  //   navigate("/editServices");
                  // } else {//de 205 a 200 le quedaria una opcion
                  //   navigate("/addEditService");
                  // }
                }
              });
            } catch (error) {
              console.error(error.code, error.message);
            }
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
            <Form onSubmit={handleSubmit} className="containerForm">
              <label className="form-label">Nombre de Empresa</label>
              <Field type="text" name="nameCompany" className="form-control" />
              <ErrorMessage
                name="nameCompany"
                component={() => (
                  <div className="error">{errors.nameCompany}</div>
                )}
              ></ErrorMessage>

              <label className="form-label">Cel de Contacto</label>
              <Field type="number" name="phone1" className="form-control" />
              <ErrorMessage
                name="phone1"
                component={() => <div className="error">{errors.phone1}</div>}
              ></ErrorMessage>

              <label className="form-label">Cel de Contacto Adicional</label>
              <Field type="number" name="phone2" className="form-control" />
              <ErrorMessage
                name="phone2"
                component={() => <div className="error">{errors.phone2}</div>}
              ></ErrorMessage>

              <label className="form-label">Domicilio</label>
              <Field type="text" name="address" className="form-control" />
              <ErrorMessage
                name="address"
                component={() => <div className="error">{errors.address}</div>}
              ></ErrorMessage>

              <label className="form-label">Descripcion de Servicio</label>
              <Field as="textarea" name="service" className="form-control" />
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
                {values.nameCompany &&
                values.phone1 &&
                values.address &&
                values.service &&
                selectedOption &&
                !errors.nameCompany &&
                !errors.phone1 &&
                !errors.address &&
                !errors.service ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-control btn btn-lg btn-primary"
                  >
                    Adherir Servicio
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="form-control btn btn-lg btn-primary"
                  >
                    Adherir Servicio
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
//<ButtonBarBoostrap />)
export default FormAddService;

// tengo este error al trabajar con actions y reducer en react ""Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions"
// ChatGPT
// Este error sugiere que estás intentando despachar una función directamente en lugar de un objeto plano (plain object) como acción en tu aplicación React con Redux. Este problema suele ocurrir cuando intentas despachar una acción asíncrona o una función directamente sin el middleware adecuado.

// La solución común es utilizar middleware como redux-thunk para manejar acciones asíncronas o funciones. redux-thunk permite que tus acciones sean funciones en lugar de objetos, lo que te permite realizar operaciones asíncronas antes de despachar la acción real.
