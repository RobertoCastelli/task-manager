// LoginForm.js
import React from "react";
import FormTemplate from "./FormTemplate";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    codicePersona: "",
  };

  const validationSchema = Yup.object({
    codicePersona: Yup.string()
      .length(8, "inserire 8 caratteri numerici")
      .matches(/^\d+$/, "Il codice deve contenere solo numeri")
      .required("obbligatorio"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("login from data", values);
      setSubmitting(false);
    }, 1000);
  };

  const fields = [
    {
      name: "codicePersona",
      type: "number",
      label: "codice persona",
      placeholder: "inserisci il tuo codice persona",
    },
  ];

  return (
    <FormTemplate {...{ initialValues, validationSchema, onSubmit, fields }} />
  );
};

export default LoginForm;
