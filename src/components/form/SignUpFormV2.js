import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        term: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "*Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "*Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        term: Yup.string().required("Required"),
      })}
      onSubmit={(values, action) => {
        setTimeout(() => {
          action.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            term: false,
          });
          action.setSubmitting(false);
        });
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="none">
        <div className="flex flex-col gap-2">
          {/* <MyInput
            label="First name"
            id="firstName"
            placeholder="Enter your first name..."
          ></MyInput>
          <ErrorMessage name="firstName"></ErrorMessage> */}
          <label htmlFor="firstName">First name</label>
          <Field
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Enter your first name..."
            className="p-4 rounded-md border border-gray-400"
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>

          <label htmlFor="lastName">Last name</label>
          <Field
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Enter your last name..."
            className="p-4 rounded-md border border-gray-400"
          ></Field>
          <ErrorMessage name="lastName"></ErrorMessage>

          <label htmlFor="email">Email address</label>
          <Field
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email..."
            className="p-4 rounded-md border border-gray-400"
          ></Field>
          <ErrorMessage name="email"></ErrorMessage>

          <label htmlFor="intro">Intro</label>
          <Field
            name="intro"
            id="intro"
            as="textarea"
            placeholder="Enter your intro..."
            className="p-4 rounded-md border border-gray-400 min-h-[150px] resize-none"
          ></Field>
          <ErrorMessage name="intro"></ErrorMessage>

          <label htmlFor="job">Job</label>
          <Field
            name="job"
            id="job"
            as="select"
            className="p-4 rounded-md border border-gray-400"
          >
            <option value="fontend">Font end</option>
            <option value="backend">Back end</option>
            <option value="fullstack">Full stack</option>
          </Field>

          <label htmlFor="term">Term</label>
          <div className="flex gap-3 items-center">
            <Field
              name="term"
              id="term"
              type="checkbox"
              className="p-4 rounded-md border border-gray-400"
            ></Field>
            <label htmlFor="term">I accept the terms and additions</label>
          </div>
          <ErrorMessage name="term"></ErrorMessage>
        </div>
        <button
          type="submit"
          className="w-full p-5 bg-green-500 rounded-lg text-white mt-4 font-semibold"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-400"
        {...props}
      />
      <div className="text-sm text-red-500"></div>
    </div>
  );
};

export default SignUpFormV2;
