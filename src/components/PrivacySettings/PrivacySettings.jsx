import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import useFetch from "../../hooks/useFetch";
import { AccountUser } from "../../data/Data";
const initialValues = {
  password: "",
  passwordConfirm: "",
  newPassword: "",
};
export default function PrivacySettings() {
  // const { isLoading, data: user } = useFetch(
  //   "http://localhost:5000/accountUser"
  // );
  const [user, setUser] = useState(AccountUser());
  const onSubmit = async (values) => {
    if (values.password === user.password) {
      const newData = { ...user, password: values.newPassword };
      try {
        const { data } = axios.post("http://localhost:5000/accountUser", {
          ...newData,
        });
        setFormValues(data);
        toast.success(`user data successfully edited`);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  const [formValues, setFormValues] = useState(null);
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    newPassword: Yup.string()
      .required()
      .notOneOf(
        [Yup.ref("password"), null],
        "New Password can't be same as previous password"
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="w-full mx-auto ">
      <div className="px-1 py-2 flex flex-col w-full items-center justify-center">
        <div className=" w-full overflow-hidden md:w-11/12 rounded-lg ">
          <div className="flex flex-col items-center w-full  justify-center px-6 py-8 mx-auto  lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0  dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
              <form
                onSubmit={formik.handleSubmit}
                className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                action="#"
              >
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
                  type="password"
                />
                <Input
                  label="New password"
                  name="newPassword"
                  formik={formik}
                  type="password"
                />

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full text-white dark:bg-primary-600 bg-slate-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset passwod
                </button>
              </form>
            </div>
          </div>
          {/* <SettingItem
            title={"Messages"}
            value={userDetails.name}
            onChangeHandler={onChangeHandler}
          /> */}
        </div>
      </div>
    </div>
  );
}
export function Input({ label, name, formik, type = "text" }) {
  return (
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...formik.getFieldProps({ name })}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="validationError text-red-500">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
}
