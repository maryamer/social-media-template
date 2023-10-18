import React, { useEffect } from "react";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import * as Yup from "yup";

import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ProfileSettings() {
  const { isLoading, data: user } = useFetch(
    "http://localhost:5000/accountUser"
  );

  const [formValues, setFormValues] = useState(null);
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
  const onEdit = async (values) => {
    try {
      const { data } = axios.post("http://localhost:5000/accountUser", {
        ...values,
      });
      setFormValues(data);
      toast.success(`user data successfully edited`);
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues: formValues || user,
    onSubmit: onEdit,
    enableReinitialize: true,
  });
  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await axios.get("http://localhost:5000/accountUser");
        setFormValues(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  const radioOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="w-full mx-auto ">
      <div className="px-1 py-2 flex flex-col items-center justify-center">
        <EditAvatar user={user} />
        <div className="dark:bg-slate-900 bg-white overflow-hidden shadow w-full md:w-5/6 rounded-lg ">
          <div className="px-4 py-5 flex items-center justify-center md:justify-start ">
            <h2 className="text-xl leading-6  font-bold text-slate-400">
              User Profile
            </h2>
          </div>
          <div className=" px-4 py-5 sm:p-0">
            <form
              onSubmit={formik.handleSubmit}
              className="divide-y dark:divide-gray-800 divide-slate-400 "
            >
              <SettingItem
                label="Name"
                name="name"
                formik={formik}
                onEdit={onEdit}
                user={user}
              />

              <RadioInput
                radioOptions={radioOptions}
                formik={formik}
                name="gender"
                user={user}
              />
              <button className="text-xs text-blue-800 cursor-pointer">
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function EditAvatar({ user }) {
  return (
    <div className="flex w-5/6 items-center md:items-start justify-center flex-col gap-1 text-center md:py-5 mt-4">
      <div className="flex  bg-center bg-no-repeat bg-cover w-36 h-36 rounded-full  shadow-lg">
        <div className="relative">
          <img className=" rounded-full" src={user.profileImage} alt="" />
          <span className="bottom-0 right-5 flex items-center cursor-pointer justify-center absolute  w-8 h-8 bg-blue-400  hover:bg-slate-400 rounded-full">
            <MdOutlineModeEdit />
          </span>
        </div>
      </div>
    </div>
  );
}

function SettingItem({ name, formik, type = "text", onEdit, user }) {
  return (
    <>
      <div className="py-3  sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 text-gray-500">
        <div className="flex">
          <label htmlFor="">{name}</label>
        </div>
        <div className="text-sm flex font-medium items-center  ">
          <input
            id={name}
            type={type}
            name={name}
            className=" dark:bg-slate-950 bg-slate-300 dark:text-white text-gray-800 outline-none p-1 rounded-lg w-[80%]"
            {...formik.getFieldProps({ name })}
          />{" "}
        </div>
        <div className=" text-sm flex items-center dark:text-gray-200 sm:mt-0 ">
          <button className="text-xs text-blue-800 hover:text-blue-500 cursor-pointer">
            Done
          </button>
          {/* &nbsp;{user.name} */}
        </div>
      </div>
    </>
  );
}

function RadioInput({ radioOptions, formik, name, user }) {
  return (
    <div className="py-3  sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
      <div className="text-sm flex font-medium  text-gray-500 ">
        <span className="w-[80%] ml-1">Gender</span>
      </div>
      <span className="mt-1 text-sm flex items-center text-gray-500 dark:text-gray-200 sm:mt-0 ">
        <div className="formControl flex">
          {radioOptions.map((item) => (
            <div key={item.value}>
              {" "}
              <input
                type="radio"
                id={item.value}
                name={name}
                value={item.value}
                onChange={formik.handleChange}
                // {...formik.getFieldProps({ name })}
                checked={formik.values[name] === item.value}
              />
              &nbsp;
              <label htmlFor={item.value}>{item.label}</label>
              &nbsp;&nbsp;&nbsp;
            </div>
          ))}
        </div>
      </span>
      <span>
        <button className="text-xs text-blue-800 cursor-pointer">Done</button>
      </span>
    </div>
  );
}
function Input({ label, name, formik, type = "text" }) {
  return (
    <div className="formControl">
      <label>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        {...formik.getFieldProps({ name })}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="validationError">{formik.errors[name]}</div>
      )}
    </div>
  );
}

{
  /* <div className="grid grid-cols-3 gap-2 my-3">
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
          <div className="postCenter w-full ">
            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            />
          </div>
        </div> */
}
