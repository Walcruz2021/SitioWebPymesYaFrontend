import Container from "react-bootstrap/Container";
import { Formik, Field, ErrorMessage, Form } from "formik";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../hooks/configFirebase";
import ButtonBarBoostrap from "../components/ButtonBar/ButtonBarBoostrap";

function FormsLogin() {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(auth, provider);

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
        <h2 className="mt-5">FORMULARIO DE INICIO DE SESION</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const error = {};

            if (!values.email) {
              error.email = "Por favor ingresa un correo";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              error.email = "Correo inválido";
            }

            if (!values.password) {
              error.password = "Por favor ingresa una contraseña";
            }
            // Letras, números, guion y guion_bajo-Mayúsculas SIN espacios
            else if (
              !/^[a-zA-Z0-9_\-.,!@#$%^&*()+=<>?/\\[\]{}|~`]{6,12}$/.test(
                values.password
              )
            ) {
              error.password =
                "Debe tener entre 6 y 12 caracteres. Sin espacios.";
            }
            return error;
          }}
          onSubmit={async (values, { resetForm }) => {
        
            // Inicia sesión con Firebase
            firebase
              .auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .then((userCredential) => {
                // Usuario autenticado correctamente
                const user = userCredential.user;
                if (user.emailVerified) {
                  // El correo electrónico está verificado
                  console.log(
                    "Usuario autenticado y correo electrónico verificado:",
                    user
                  );
                } else {
                  // El correo electrónico no está verificado
                  console.log(
                    "Usuario autenticado pero el correo electrónico no está verificado."
                  );
                  // Puedes redirigir al usuario a una página donde puedan verificar su correo electrónico
                }
              })
              .catch((error) => {
                // Error al iniciar sesión
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error al iniciar sesión:", errorMessage);
              });
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
                {values.email &&
                values.password &&
                !errors.password &&
                !errors.email ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-control btn btn-lg btn-secondary"
                  >
                    Inicio de Sesión
                  </button>
                ) : (
                  <button
                    disabled
                    className="form-control btn btn-lg btn-secondary"
                  >
                    Inicio de Sesión
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
