// LoginForm.js
import React from "react";
import FormTemplate from "./FormTemplate";
import * as Yup from "yup";

const AnagraficaDitteForm = () => {
  // Valori iniziali per il modulo
  const initialValues = {
    ditta: "",
    tipologiaServizio: "",
    via: "",
    civico: "",
    cap: "",
    città: "",
    piva: "",
    pec: "",
    referenteDitta: "",
    lottoGeografico: "",
  };

  // Schema di validazione per il modulo
  const validationSchema = Yup.object({
    ditta: Yup.string().required("campo obbligatorio"),
    tipologiaServizio: Yup.string().required("campo obbligatorio"),
    via: Yup.string().required("campo obbligatorio"),
    civico: Yup.string().required("campo obbligatorio"),
    cap: Yup.string()
      .matches(/^\d{5}$/, "Il CAP deve essere composto da 5 cifre")
      .required("campo obbligatorio"),
    città: Yup.string().required("campo obbligatorio"),
    piva: Yup.string()
      .matches(/^\d{11}$/, "La Partita IVA deve essere composta da 11 cifre")
      .required("campo obbligatorio"),
    pec: Yup.string()
      .email("L'indirizzo PEC deve essere un'email valida")
      .required("campo obbligatorio"),
    referenteDitta: Yup.string().required("campo obbligatorio"),
    lottoGeografico: Yup.string().required("campo obbligatorio"),
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
      name: "ditta",
      type: "text",
      placeholder: "ditta",
    },
    {
      name: "tipologiaServizio",
      type: "text",
      placeholder: "tipologia del servizio",
    },
    {
      name: "via",
      type: "text",
      placeholder: "via",
    },
    {
      name: "civico",
      type: "text",
      placeholder: "civico",
    },
    {
      name: "cap",
      type: "text",
      placeholder: "cap",
    },
    {
      name: "città",
      type: "text",
      placeholder: "città",
    },
    {
      name: "piva",
      type: "text",
      placeholder: "P.IVA",
    },
    {
      name: "pec",
      type: "email",
      placeholder: "PEC",
    },
    {
      name: "referenteDitta",
      type: "text",
      placeholder: "referente ditta",
    },
  ];

  return (
    // Renderizza il template del modulo con le configurazioni fornite
    <FormTemplate {...{ initialValues, validationSchema, onSubmit, fields }} />
  );
};

export default AnagraficaDitteForm;
