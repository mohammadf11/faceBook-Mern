import React from "react";
import {useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import userScreenSize from "../../hook/screenSize";
import ErrorMessage from './ErrorMessage'

function LoginForm() {
  const loginValidation = Yup.object({
    emial: Yup.string()
      .required("Email address is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      emial: "",
      password: "",
    },
    validateYupSchema: loginValidation,
    onSubmit: (values) => {},
  });

  return (
    <div className="shadow-md p-4 rounded-md bg-gray-100">
      <div className="w-80">
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className=" lg:space-y-4  relative">
            <ErrorMessage/>
            <div>
              <input type="email" name="email" placeholder="Email address" />
              <ExclamationCircleIcon className=" w-6" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
