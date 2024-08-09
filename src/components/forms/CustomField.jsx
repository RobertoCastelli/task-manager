// CustomField.js
import React from "react";
import { Field, ErrorMessage } from "formik";

const CustomField = ({ label, name, type = "text", placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" className="form-error" />
    </div>
  );
};

export default CustomField;
