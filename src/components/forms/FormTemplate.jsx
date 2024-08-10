// FormTemplate.js
import React from "react";
import { Formik, Form } from "formik";
import CustomField from "./CustomField";
import "../../styles/Form.css";

/**
 * Componente per gestire moduli con Formik.
 *
 * @param props - Le proprietà del componente.
 */
const FormTemplate = (props) => (
  <Formik
    initialValues={props.initialValues} // Valori iniziali dei campi del modulo
    validationSchema={props.validationSchema} // Schema di validazione del modulo
    onSubmit={props.onSubmit} // Funzione chiamata al momento dell'invio del modulo
  >
    {({ isSubmitting }) => (
      <Form>
        {props.fields.map((field, index) => (
          <CustomField
            key={index} // Identificatore unico per ogni campo
            label={field.label} // Etichetta del campo
            name={field.name} // Nome del campo, usato da Formik per identificare il campo
            type={field.type} // Tipo di campo (es. testo, numero)
            placeholder={field.placeholder} // Testo segnaposto per il campo
          />
        ))}
        {/* Bottone per inviare il modulo */}
        <button type="submit" disabled={isSubmitting}>
          invia
        </button>
      </Form>
    )}
  </Formik>
);

export default FormTemplate;
