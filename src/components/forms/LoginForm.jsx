import React from "react";
import FormTemplate from "./FormTemplate";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    codicePersona: "",
    password: "",
  };

  const validationSchema = Yup.object({
    codicePersona: Yup.string()
      .matches(/^\d{8}$/, "Deve contenere solo 8 numeri")
      .required("campo obbligatorio"),
    password: Yup.string()
      .min(8, "Deve contenere 8 caratteri")
      /*     .matches(/[A-Z]/, "Deve contenere una lettera maiuscola")
      .matches(/[a-z]/, "Deve contenere una lettera minuscola")
      .matches(/\d/, "Deve contenere un numero")
      .matches(/[@$!%*?&#]/, "Deve contenere un carattere speciale") */
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
      placeholder: "inserisci codice persona",
    },
    {
      name: "password",
      type: "password",
      label: "password",
      placeholder: "inserisci password",
    },
  ];

  return (
    <div>
      <h3>login</h3>
      <FormTemplate
        {...{ initialValues, validationSchema, onSubmit, fields }}
      />
    </div>
  );
};

export default LoginForm;
