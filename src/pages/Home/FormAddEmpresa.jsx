import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import "./FormAddEmpresa.css"
import NavBar from "../../components/NavBar/NavBarBoostrap";


const FormAddEmpresa = () => {
  return (
    <>
      <NavBar />
      <h1>rewtrsd</h1>
        <Formik
          initialValues={{ nombreComp: "", notasComp: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.nombreComp) {
              //errors.nombreComp = "ingrese nombre de compañia";
            }
            if (!values.notasComp) {
              //errors.notasComp = "ingrese nota de compañia";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
          }}
        >
          {({ errors,handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              
              <Field type="nombreComp" name="nombreComp">
                {/* <ErrorMessage
                  name="nombreComp"
                  component={() => <div className="error">{errors.nombreComp}</div>}
                ></ErrorMessage> */}
                
              </Field>
               <ErrorMessage
                  name="nombreComp"
                  component={() => <div className="error">{errors.nombreComp}</div>}
                ></ErrorMessage> 

               <Field type="notasComp" name="notasComp">
                
              </Field> 
              <ErrorMessage
                  name="notasComp"
                  component={() => <div className="error">{errors.notasComp}</div>}
                ></ErrorMessage> 
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </>
  );
}
export default FormAddEmpresa;