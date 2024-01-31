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
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const error = {};

            if (!values.email) {
              error.email = "por favor ingresa correo";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              error.email = "correo invalido";
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
                />

                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                ></ErrorMessage>
              </div>

              <div className="mt-4">
                {values.email && values.password && !errors.password && !errors.email ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-control btn btn-lg btn-secondary"
                  >
                    Inicio de Sesion
                  </button>
                ) : (
                  <button
                    disabled
                    className="form-control btn btn-lg btn-secondary"
                  >
                    Inicio de Sesion
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
            Google E-mail
          </button>
        </div>
      
      </div>
    </>
  );
}

export default FormsLogin;
