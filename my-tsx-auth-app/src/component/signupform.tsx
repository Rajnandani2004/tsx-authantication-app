import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be 6 characters or more").required("Required"),
  });

  const onSubmit = (values: typeof initialValues, { resetForm }: any) => {
    setSuccessMessage("Sign Up Successful");
    resetForm();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="email">Email:</label>
              <Field id="email" name="email" type="email" />
              <div style={{ color: "red" }}>
                <ErrorMessage name="email" component="div" />
              </div>
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field id="password" name="password" type="password" />
              <div>
                Strength: {values.password.length < 6 ? "Weak" : "Strong"}
              </div>
              <div style={{ color: "red" }}>
                <ErrorMessage name="password" component="div" />
              </div>
            </div>

            <button type="submit">Sign Up</button>
            {successMessage && (
              <div style={{ color: "green" }}>{successMessage}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
