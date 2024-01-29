import Container from "react-bootstrap/Container";
import { Formik, Field, ErrorMessage, Form } from "formik";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { auth } from "../hooks/configFirebase";
import ButtonBarBoostrap from "../components/ButtonBar/ButtonBarBoostrap";

function FormsLogin() {
  //const notify = () => toast("Wow so easy!");
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(auth, provider);

    try {
      onAuthStateChanged(auth, async (user) => {
        console.log(user, "--->");
      });
    } catch (error) {
      console.log(error.message, error.code);
    }
  };

  return (
    <>
      <div>
        <h2 className="mt-5">FORMULARIO DE INICIO DE SESION</h2>
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
              const auth = getAuth();
              const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
              );
              alert(`Bienvenido${userCredential.user.email}`);
          
              
            } catch (error) {
              console.error(error.code, error.message);
              if (error.code === "auth/invalid-email") {
                //alertToastify();
                alert("password has few characters");
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
              <div className="mt-2">
                <label className="form-label">Email</label>
                <Field type="email" name="email" className="form-control">
                  {/* <ErrorMessage
              name="email"
              component={() => <div className="error">{errors.email}</div>}
            ></ErrorMessage> */}
                </Field>
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="form-label">
                  Contraseña
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
                  className="form-control btn btn-lg btn-secondary"
                >
                  Inicio de Sesion
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-4">
          <button
            onClick={loginGoogle}
            className="form-control btn btn-lg btn-secondary"
          >
            Google E-mail
          </button>
        </div>
        <ButtonBarBoostrap />
      </div>
    </>
  );
}

export default FormsLogin;
