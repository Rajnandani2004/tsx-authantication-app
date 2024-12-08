import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const initialValues = {
    email: localStorage.getItem("rememberedEmail") || "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: typeof initialValues, { resetForm }: any) => {
    if (values.rememberMe) {
      localStorage.setItem("rememberedEmail", values.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    setSuccessMessage("Login Successful");
    resetForm();
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <label htmlFor="email">Email:</label>
            <Field id="email" name="email" type="email" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="email" component="div" />
            </div>

            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" type="password" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <Field id="rememberMe" name="rememberMe" type="checkbox" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button type="submit">Login</button>
            {successMessage && (
              <div style={{ color: "green" }}>
                {successMessage}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
