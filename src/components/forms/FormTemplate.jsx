// FormTemplate.js
import React from "react";
import { Formik, Form } from "formik";
import CustomField from "./CustomField";

const FormTemplate = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        {fields.map((field, index) => (
          <CustomField
            key={index}
            label={field.label}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <button type="submit" disabled={isSubmitting}>
          invia
        </button>
      </Form>
    )}
  </Formik>
);

export default FormTemplate;
