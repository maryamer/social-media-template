import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import CheckBoxInput from "./common/CheckBoxInput";
import Input from "./common/input";
import RadioInput from "./common/RadioInput";
import SelectComponent from "./common/SelectComponent";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
  gender: "",
  nationality: "",
  interests: [], //["React.js","Vue.js"]
  terms: false,
};

export default function SignUpForm() {
  const checkBoxOptions = [
    { label: "React.js", value: "React.js" },
    { label: "Vue.js", value: "Vue.js" },
  ];
  const radioOptions = [
    { label: "male", value: "0" },
    { label: "female", value: "1" },
  ];
  const selectOptions = [
    { label: "select nationlity... ", value: "" },
    { label: "persian", value: "IR" },
    { label: "turkish", value: "TR" },
    { label: "USA", value: "US" },
    { label: "german", value: "GER" },
  ];
  const [formValues, setFormValues] = useState(null);
  const onSubmit = async (values) => {
    try {
      axios.post("http://localhost:5000/users", {
        ...values,
        birthDate: "1 september 2003",
      });
    } catch (error) {}
  };
  const validationSchema = Yup.object({
    name: Yup.string("name should be string ")
      .required("name is required")
      .min(6, "name at least 6 characters"),
    email: Yup.string()
      .required("email is required")
      .email("invalid email format"),
    phone: Yup.string()
      .required()
      .matches(/^[0-9]{11}$/, "Invalid phone number")
      .nullable(),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    gender: Yup.string().required("gender is required"),
    nationality: Yup.string().required("select nationality"),
    interests: Yup.array().min(1, "at least select one experties").required(),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });
  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  //  http://localhost:5000/users
  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await axios.get("http://localhost:5000/users/1");
        setFormValues(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
    console.log(formik.values);
  }, []);
  // console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input label="Phone" name="phone" formik={formik} type="number" />
        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
        />
        <Input
          label="Password Confirmation"
          name="passwordConfirm"
          formik={formik}
          type="passwordConfirm"
        />
        <RadioInput radioOptions={radioOptions} formik={formik} name="gender" />
        <SelectComponent
          selectOptions={selectOptions}
          formik={formik}
          name="nationality"
        />
        <CheckBoxInput
          checkBoxOptions={checkBoxOptions}
          formik={formik}
          name="interests"
        />

        <div className="formControl">
          {" "}
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={true}
            // {...formik.getFieldProps({ name })}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          <label htmlFor="terms">Terms and Conditions</label>
          {formik.errors.terms && formik.touched.terms && (
            <div className="validationError">{formik.errors.terms}</div>
          )}
        </div>

        {/* <button onClick={() => setFormValues(savedData)}>load data</button> */}
        <button type="submit " disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
