import React from "react";
import FormTemplate from "./FormTemplate";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    codicePersona: "",
  };

  const validationSchema = Yup.object({
    codicePersona: Yup.string()
      .matches(/^\d{8}$/, "Il codice deve contenere solo 8 numeri")
      .required("campo obbligatorio"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Dati del modulo:", values);
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
