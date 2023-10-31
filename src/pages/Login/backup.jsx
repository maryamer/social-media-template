// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Input from "../../components/common/Input";
// import * as Yup from "yup";
// import { useFormik } from "formik";

// export default function Login() {
//   const initialValues = {
//     username: "mary",
//     email: "maryam@example.com",
//     // phone: "",
//     password: "password123",
//     // passwordConfirm: "",
//     // gender: "",
//     // nationality: "",
//     // interests: [],
//     // terms: false,
//   };
//   const [formValues, setFormValues] = useState(null);
//   const onSubmit = async (values, { setSubmitting }) => {
//     console.log(values);
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/user/login/", {
//         ...values,
//       });
//       console.log(response);
//     } catch (error) {}
//     setSubmitting(false);
//   };

//   const validationSchema = Yup.object({
//     // name: Yup.string("name should be string ")
//     //   .required("name is required")
//     //   .min(6, "name at least 6 characters"),
//     email: Yup.string()
//       .required("email is required")
//       .email("invalid email format"),
//     // phone: Yup.string()
//     //   .required()
//     //   .matches(/^[0-9]{11}$/, "Invalid phone number")
//     //   .nullable(),
//     // password: Yup.string()
//     //   .required("password is required")
//     //   .matches(
//     //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//     //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//     //   ),
//     // passwordConfirm: Yup.string()
//     //   .required()
//     //   .oneOf([Yup.ref("password"), null], "Passwords must match"),
//     // gender: Yup.string().required("gender is required"),
//     // nationality: Yup.string().required("select nationality"),
//     // interests: Yup.array().min(1, "at least select one experties").required(),
//     // terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
//   });
//   const formik = useFormik({
//     initialValues: formValues || initialValues,
//     onSubmit,
//     validationSchema,
//     // validateOnMount: true,
//     // enableReinitialize: true,
//   });
//   return (
//     <section className="bg-gray-50 dark:bg-gray-950 bg-slate-400 h-screen w-full ">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 w-full space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-white">
//               Login to your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <Input
//                 label="Your Email"
//                 name="email"
//                 formik={formik}
//                 type="email"
//                 placeholder={"user@gmail.com"}
//               />
//               <Input
//                 label="username"
//                 name="username"
//                 formik={formik}
//                 type="text"
//                 placeholder={"mary1"}
//               />
//               <Input
//                 label="Your Password"
//                 name="password"
//                 formik={formik}
//                 type="password"
//                 placeholder={"*********"}
//               />

//               {/* <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label
//                       htmlFor="remember"
//                       className="text-gray-500 dark:text-gray-300"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <Link
//                   href="#"
//                   className="text-sm font-medium text-blue-900 hover:underline dark:text-primary-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div> */}
//               <button
//                 type="submit"
//                 className="w-full text-white bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Login
//               </button>
//               <p className="text-sm font-light text-gray-700 dark:text-gray-400">
//                 Don’t have an account yet?{" "}
//                 <Link
//                   to="/register"
//                   className="font-medium text-blue-800 hover:underline dark:text-primary-500"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const initialValues = {
    username: "mary",
    email: "maryam@example.com",
    // phone: "",
    password: "password123",
    // passwordConfirm: "",
    // gender: "",
    // nationality: "",
    // interests: [],
    // terms: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    // Make API request to authenticate user
    // console.log(values);
    try {
      const response = await axios.post("http://127.0.0.1:8000/user/login/", {
        ...values,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // Handle response from server
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" value="maryam@example.com" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>username:</label>
            <Field type="text" name="username" value="mary" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" value="password123" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
