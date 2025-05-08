import React, { useEffect } from "react";
import * as Yup from "yup";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import emailjs from "@emailjs/browser";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import "./Contact.css";
import phone from "./imagenes/phone.png";
import gmail from "./imagenes/gmail.png";
import { IconBase } from "react-icons/lib";
import IonIcon from "@reacticons/ionicons";
import Swal from "sweetalert2";
import { auth } from "../../hooks/configFirebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "../../store/actions/actions";

import { useState } from "react";

// export interface stateInput {
//     email: string;
//     name: string;
//     message: string
// }

// Shape of form values
// interface FormValues {
//     name: string;
//     email: string;
//     message: string;
// }

// interface OtherProps {
//     message: string;
// }

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = () => {
  const dispatch = useDispatch();
  const userFullName = useSelector((state) => state.userDataName);
  const [stateInput, setStateInput] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [loginUser, setLoginUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified, displayName } = userCred;
        setLoginUser({ email, emailVerified, displayName });
      }
    });
  }, []);
  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);

  // const { touched, errors, isSubmitting, message } = props;
  let navigate = useNavigate();
  // useEffect(() => {
  //    setStateInput("false")
  //   }, []);

  function submitForm(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    //console.log(e.target)
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      console.log("mensaje enviado");

      // emailjs.sendForm('service_vfvnhsc', 'template_mihhwsa', e.target, '6wRJW_4Y-H_LANUgQ')
      //     .then(response => console.log(response))
      //     .catch(error => console.log(error))

      Swal.fire("Mensaje Enviado!", "You clicked the button!", "success");
      setStateInput({
        name: "",
        email: "",
        message: "",
      });
      //   setTimeout(function(){
      //    navigate.push('/')
      //   },2000)
    } else {
      console.log("mensaje no enviado");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }

  function onChange1(e) {
    setStateInput({
      ...stateInput,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
   
      {/* <div className="containerForm">
                
            </div> */}
      <div className="titGral">
        <h3>MEDIOS DE CONTACTO</h3>
      </div>
      <div className="mediosContact">
        <div>
          <img className="iconoContact" src={phone} alt="phoneContact" />
          <p>Venta teléfonica Atención al cliente</p>
          <p className="textContact">3876153799</p>
          <p>Lunes a Sábados de 9:00 a 21:00hs</p>
        </div>
        <div>
          <img className="iconoContact" src={gmail} alt="gmailContact" />
          <p>Atención al cliente Correo Electronico</p>
          <p className="textContact">Email: pymestiendavirtual@gmail.com</p>
          <p>Lunes a Sábados de 9:00 a 21:00hs</p>
        </div>
      </div>

      {/* <div className="mediosContact">
                <h3>PREGUNTAS FRECUENTES</h3>

                <h5>Que incluye la Pagina</h5>
            </div> */}

      <ButtonBar />
    </>
  );
};

// The type of props MyForm receives
// interface MyFormProps {

//     initialEmail?: string;
//     message: string; // if this passed all the way through you might do this or make a union type
// }

// Wrap our form with the withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: props.initialEmail || "",
      message: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values) => {
    console.log(values);
    let errors = {};
    if (!values.name) {
      errors.name = " * por favor ingresa nombre";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
      errors.name = " * el nombre con solo letras y espacios";
    }

    if (!values.email) {
      errors.email = "Required";
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = " * correo invalido";
      }
    }

    if (!values.message) {
      errors.message = "* por favor ingrese mensaje";
      //console.log(values)
    } else if (!/^[a-zA-Z0-9\_\-\s]{4,100}$/.test(values.message)) {
      errors.message = " * el mensaje con solo letras y espacios";
    }
    return errors;
  },

  handleSubmit: (e, { resetForm }) => {
    console.log(e);
    // resetForm()
    //e.preventDefault()

    // const name = e.name
    // const email = e.email
    // const message = e.message

    //console.log(e.target)
    // if (name.length > 0 && email.length > 0 && message.length>0) {
    //     console.log("mensaje enviado")
    //     resetForm()
    //     Swal.fire(
    //         'Mensaje Enviado!',
    //         'You clicked the button!',
    //         'success'
    //       );
    //     emailjs.sendForm('service_vfvnhsc', 'template_mihhwsa', e.email, '6wRJW_4Y-H_LANUgQ')
    //          .then(response => console.log(response))
    //          .catch(error => console.log(error))

    //           resetForm()
    //         //   setTimeout(function(){
    //         //    navigate.push('/')
    //         //   },2000)
    // }else{
    //     console.log("mensaje no enviado")
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!',
    //         footer: '<a href="">Why do I have this issue?</a>'
    //       })
    // }
  },
})(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => (
  <div>
    <MyForm message="Complete el Formulario" />
  </div>
);

export default Basic;
