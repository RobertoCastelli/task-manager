// LoginForm.js
import React from "react";
import FormTemplate from "./FormTemplate";
import * as Yup from "yup";

const LoginForm = () => {
  // Valori iniziali per il modulo
  const initialValues = {
    codicePersona: "",
  };

  // Schema di validazione per il modulo
  const validationSchema = Yup.object({
    codicePersona: Yup.string()
      .matches(/^\d{8}$/, "Il codice deve contenere solo 8 numeri")
      .required("campo obbligatorio"),
  });

  // Funzione chiamata quando il modulo viene inviato
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Dati del modulo:", values);
      setSubmitting(false); // Permette di inviare il modulo di nuovo
    }, 1000);
  };

  // Configurazione dei campi del modulo
  const fields = [
    {
      name: "codicePersona",
      type: "number",
      label: "codice persona",
      placeholder: "inserisci il tuo codice persona",
    },
  ];

  return (
    // Renderizza il template del modulo con le configurazioni fornite
    <FormTemplate {...{ initialValues, validationSchema, onSubmit, fields }} />
  );
};

export default LoginForm;
