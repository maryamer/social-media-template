import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useRef } from "react";

export default function ProfileSettings() {
  const { isLoading, data: user } = useFetch(
    "http://localhost:5000/accountUser"
  );
  const [formValues, setFormValues] = useState(null);
  const [prevValues, setPrevValues] = useState(null);
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
    gender: Yup.string().required("gender is required"),
    location: Yup.string().required("select nationality"),
  });
  useEffect(() => {
    setPrevValues(user);
  }, [user]);

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
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

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
            <h2 className="text-xl  font-bold text-slate-400">User Profile</h2>
          </div>
          <div className=" px-4 md:py-5 sm:p-0">
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
              <SettingItem
                label="LastName"
                name="lastName"
                formik={formik}
                onEdit={onEdit}
                user={user}
              />
              <SettingItem
                label="Email"
                name="email"
                formik={formik}
                onEdit={onEdit}
                user={user}
              />
              <SettingItem
                label="Bio"
                name="bio"
                formik={formik}
                onEdit={onEdit}
                user={user}
              />
              <SettingItem
                label="Link"
                name="link"
                formik={formik}
                onEdit={onEdit}
                user={user}
              />
              <SettingItem
                label="Phone"
                name="phone"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function EditAvatar({ user }) {
  return (
    <div className="flex w-5/6 items-center md:items-start justify-center flex-col gap-1 text-center md:py-5 my-4">
      <div className="flex  bg-center bg-no-repeat bg-cover w-36 h-36 rounded-full  shadow-lg">
        <div className="relative">
          <img className=" rounded-full" src={user.image} alt="" />
          <span className="bottom-0 right-5 flex items-center cursor-pointer justify-center absolute  w-8 h-8 bg-blue-400  hover:bg-slate-400 rounded-full">
            <MdOutlineModeEdit />
          </span>
        </div>
      </div>
    </div>
  );
}

function SettingItem({ label, name, formik, type = "text", user }) {
  const inputRef = useRef(null);
  return (
    <>
      <div className="pb-1  sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3 text-gray-500">
        <div className="flex py-2">
          <label htmlFor="">{label}</label>
        </div>
        <div className="text-sm flex flex-col justify-start font-medium items-center  pb-1  ">
          <input
            ref={inputRef}
            id={name}
            type={type}
            name={name}
            className=" w-full md:w-auto dark:bg-slate-950 bg-slate-300 dark:text-white text-gray-800 outline-none p-2 rounded-lg w-[80%]"
            {...formik.getFieldProps({ name })}
          />{" "}
          {formik.errors[name] && formik.touched[name] && (
            <div className="validationError ml-1 self-start md:self-center text-sm text-red-500">
              {formik.errors[name]}
            </div>
          )}
        </div>
        <div className=" p-1  flex  dark:text-gray-200 sm:mt-0 ">
          <button
            // onMouseDown={() => console.log(inputRef)}
            disabled={formik.values[name] === user[name]}
            className="md:font-semibold flex font-medium text-blue-800 hover:text-blue-500 cursor-pointer lg:mr-12"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

function RadioInput({ radioOptions, formik, name, user }) {
  return (
    <div className="py-3  sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
      <div className="text-sm flex font-medium  text-gray-500 pb-1 ">
        <span className="w-[80%] ml-1">Gender</span>
      </div>
      <span className="mt-1 text-sm flex items-center text-gray-500 dark:text-gray-200 sm:mt-0 pb-1 ">
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
              &nbsp;&nbsp;
              {formik.errors[name] && formik.touched[name] && (
                <div className="validationError ml-1 self-start md:self-center text-sm text-red-500">
                  {formik.errors[name]}
                </div>
              )}
            </div>
          ))}
        </div>
      </span>
      <span>
        <button className="font-medium md:font-semibold text-blue-800 cursor-pointer p-1 lg:mr-12">
          Done
        </button>
        &nbsp;
      </span>
    </div>
  );
}
