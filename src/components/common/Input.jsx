import React from "react";

export default function Input({
  label,
  name,
  formik,
  type = "text",
  placeholder,
}) {
  return (
    <div className="formControl">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps({ name })}
        className="bg-gray-100 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {formik.errors[name] && formik.touched[name] && (
        <div className="validationError text-red-600">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
}
