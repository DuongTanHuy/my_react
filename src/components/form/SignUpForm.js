import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (formik) => {
//   const errors = {};
//   if (!formik.firstName) errors.firstName = "*Required";
//   else if (formik.firstName.length > 20)
//     errors.firstName = "8Must be 20 characters or less";
//   if (!formik.lastName) errors.lastName = "*Required";
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "*Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "8Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          className="p-4 rounded-md border border-gray-400"
          // values={formik.values.firstName}
          // name="firstName"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
        )}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your last name..."
          className="p-4 rounded-md border border-gray-400"
          // values={formik.values.lastName}
          // name="lastName"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-5 bg-green-500 rounded-lg text-white mt-4 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
