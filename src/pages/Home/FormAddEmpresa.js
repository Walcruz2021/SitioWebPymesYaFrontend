import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

const Basic = () => {
  return (
    <div>
      <Formik>
        {({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field type="nombreComp" name="nombreComp">
              <ErrorMessage name="nombreComp" component={()=><div className="error">{}</div>}></ErrorMessage>
            </Field>
            
            <Field type="notasComp" name="notasComp">
              <ErrorMessage name="notasComp" component={()=><div className="error">{}</div>}></ErrorMessage>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
