// LoginForm.js
import React from "react";
import FormTemplate from "./FormTemplate";
import * as Yup from "yup";

const DitteForm = () => {
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
      .matches(/^\d{5}$/, "il CAP deve avere 5 cifre")
      .required("campo obbligatorio"),
    città: Yup.string().required("campo obbligatorio"),
    piva: Yup.string()
      .matches(/^\d{11}$/, "la P.IVA deve avere 11 cifre")
      .required("campo obbligatorio"),
    pec: Yup.string()
      .email("l'email deve essere valida")
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
      label: "ditta",
      name: "ditta",
      type: "text",
      placeholder: "inserisci ditta",
    },
    {
      label: "tipologia servizio",
      name: "tipologiaServizio",
      type: "text",
      placeholder: "inserisci tipologia",
    },
    {
      label: "via",
      name: "via",
      type: "text",
      placeholder: "inserisci via",
    },
    {
      label: "civico",
      name: "civico",
      type: "text",
      placeholder: "inserisci civico",
    },
    {
      label: "cap",
      name: "cap",
      type: "text",
      placeholder: "inserisci cap",
    },
    {
      label: "città",
      name: "città",
      type: "text",
      placeholder: "inserisci città",
    },
    {
      label: "p.iva",
      name: "piva",
      type: "text",
      placeholder: "inserisci p.iva",
    },
    {
      label: "pec",
      name: "pec",
      type: "email",
      placeholder: "inserisci pec",
    },
    {
      label: "referente ditta",
      name: "referenteDitta",
      type: "text",
      placeholder: "inserisci referente ditta",
    },
    {
      label: "lotto geografico",
      name: "lottoGeografico",
      type: "text",
      placeholder: "inserisci lotto geografico",
    },
  ];

  return (
    <div>
      <h3>inserisci nuova ditta</h3>
      <FormTemplate
        {...{ initialValues, validationSchema, onSubmit, fields }}
      />
    </div>
  );
};

export default DitteForm;
