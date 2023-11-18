import React, { useState, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editAsyncAccountUser,
  getAsyncAccountUser,
} from "../../features/accountUser/accountUserSlice";

import CloudinaryUploadWidget, {
  initializeCloudinaryWidget,
} from "../common/CloudinaryUploadWidget/CloudinaryUploadWidget";

export default function ProfileSettings() {
  const [formValues, setFormValues] = useState(null);

  const {
    loading: isLoading,
    error,
    user,
  } = useSelector((state) => state.accountUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncAccountUser());
    if (user) {
      setFormValues(user);
    }
  }, []);

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
  const [imageUrl, setImageUrl] = useState("");

  const onEdit = async (values) => {
    console.log(imageUrl);

    if (imageUrl) {
      dispatch(editAsyncAccountUser({ values: values, image: imageUrl }));
    } else {
      dispatch(editAsyncAccountUser({ values: values, image: values.image }));
    }
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
    <>
      {user && (
        <div className="w-full mx-auto ">
          <div className="px-1 py-2 flex flex-col items-center justify-center">
            <EditAvatar
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              name="name"
              formik={formik}
              onEdit={onEdit}
            />
            <div className="dark:bg-slate-900 bg-white overflow-hidden shadow w-full md:w-5/6 rounded-lg ">
              <div className="px-4 py-5 flex items-center justify-center md:justify-start ">
                <h2 className="text-xl  font-bold text-slate-400">
                  User Profile
                </h2>
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
                    user={user}
                  />
                  <SettingItem
                    label="LastName"
                    name="lastName"
                    formik={formik}
                    user={user}
                  />

                  <SettingItem
                    label="Email"
                    name="email"
                    formik={formik}
                    user={user}
                  />
                  <SettingItem
                    label="Bio"
                    name="bio"
                    formik={formik}
                    user={user}
                  />
                  <SettingItem
                    label="Link"
                    name="link"
                    formik={formik}
                    user={user}
                  />
                  <SettingItem
                    label="Phone"
                    name="phone"
                    formik={formik}
                    user={user}
                  />

                  <RadioInput
                    radioOptions={radioOptions}
                    formik={formik}
                    name="gender"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function EditAvatar({ formik, onEdit, imageUrl, setImageUrl }) {
  const [cloudName] = useState(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME),
    [uploadPreset] = useState(import.meta.env.VITE_CLOUDINARY_CLOUD_PRESET),
    [uwConfig] = useState({ cloudName, uploadPreset }),
    [loaded, setLoaded] = useState(false);

  return (
    <div className="flex w-5/6 items-center md:items-start justify-center flex-col gap-1 text-center md:py-5 my-4">
      <div className="flex  bg-center bg-no-repeat bg-cover w-36 h-36 rounded-full  shadow-lg">
        <div className="relative cursor-pointer ">
          <CloudinaryUploadWidget loaded={loaded} setLoaded={setLoaded}>
            <button
              id="upload_widget"
              className=""
              onClick={() =>
                initializeCloudinaryWidget({
                  loaded,
                  uwConfig,
                  setImageUrl,
                })
              }
            >
              <img
                className=" rounded-full w-36 h-36 object-cover"
                src={imageUrl || formik.values?.image}
                alt=""
              />
              <span className="bottom-0 right-5 flex items-center cursor-pointer justify-center absolute  w-8 h-8 bg-blue-400  hover:bg-slate-400 rounded-full">
                <MdOutlineModeEdit />
              </span>
            </button>
          </CloudinaryUploadWidget>
          <div className=" p-1  flex  dark:text-gray-200 sm:mt-0 ">
            <button
              type="submit"
              onClick={() => onEdit(formik.values, imageUrl)}
              // disabled={formik.values.image === user.image}
              className="md:font-semibold flex font-medium text-blue-800 hover:text-blue-500 cursor-pointer lg:mr-12"
            >
              Done
            </button>
          </div>
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
            value={formik.value}
            className=" w-full  dark:bg-slate-950 bg-slate-300 dark:text-white text-gray-800 outline-none p-2 rounded-lg w-[80%]"
            {...formik.getFieldProps({ name })}
          />{" "}
          {formik.errors[name] && formik.touched[name] && (
            <div className="validationError ml-1 self-start text-sm text-red-500">
              {formik.errors[name]}
            </div>
          )}
        </div>
        <div className=" p-1  flex  dark:text-gray-200 sm:mt-0 ">
          <button
            type="submit"
            disabled={formik.values && formik.values[name] === user[name]}
            className="md:font-semibold flex font-medium text-blue-800 hover:text-blue-500 cursor-pointer lg:mr-12"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export function RadioInput({ radioOptions, formik, name }) {
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
                checked={formik.values && formik.values[name] === item.value}
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
