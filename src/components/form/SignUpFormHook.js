import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const SignUpFormHook = () => {
  // const { handleSubmit, register, formState: {errors}} = useForm();
  const schemaValidators = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .max(10, "The first name must be at least 10 characters long"),
    lastName: Yup.string()
      .required("Last Name is required")
      .max(10, "The last name must be at least 10 characters long"),
    email: Yup.string().required("Email is required"),
  });
  const forms = useForm({
    resolver: yupResolver(schemaValidators),
    mode: "onChange",
  });
  const watchShowAge = forms.watch("showAge", false);
  const onSubmit = async (values) => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query="
    );
    forms.reset({
      firstName: "",
      lastName: "",
      email: "",
    });
    forms.resetField("email");
    console.log(values);
    return response.data;
    // return new Promise((resolver) => {
    // setTimeout(() => {
    //   resolver(values);
    //   console.log(values);
    // }, 5000);
    // });
  };

  const handleDemoData = (event) => {
    event.preventDefault();
    forms.setValue("firstName", "demo");
    forms.setValue("lastName", "demo");
    forms.setValue("email", "demo@gmail.com");
  };

  useEffect(() => {
    forms.setFocus("firstName");
  }, [forms, forms.setFocus]);

  return (
    <form
      onSubmit={forms.handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          className="p-4 rounded-md border border-gray-400"
          {...forms.register("firstName")}
          // {...forms.register("firstName", {
          //   required: "*First name is required",
          //   maxLength: 10,
          // })}
        />
        {forms.formState.errors?.firstName?.type && (
          <div className="text-red-500 text-sm">
            {forms.formState.errors.firstName.message}
          </div>
        )}
        {/* {forms.formState.errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            The first name must be at least 10 characters long
          </div>
        )} */}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name..."
          className="p-4 rounded-md border border-gray-400"
          {...forms.register("lastName")}
          // {...forms.register("lastName", {
          //   required: "*Last name is required",
          //   maxLength: 10,
          // })}
        />
        {forms.formState.errors?.lastName?.type && (
          <div className="text-red-500 text-sm">
            {forms.formState.errors.lastName.message}
          </div>
        )}
        {/* {forms.formState.errors?.lastName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            The last name must be at least 10 characters long
          </div>
        )} */}
        <label htmlFor="email">Email</label>
        <MyInput
          name="email"
          placeholder="Enter your email..."
          id="email"
          control={forms.control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="p-4 rounded-md border border-gray-400"
          {...forms.register("email")}
          // {...forms.register("email", {
          //   required: "*Email is required",
          // })}
        /> */}
        {forms.formState.errors?.email?.type === "required" && (
          <div className="text-red-500">
            {forms.formState.errors.email.message}
          </div>
        )}
      </div>
      <div className="m-3">
        <input
          type="checkbox"
          className="mr-3"
          {...forms.register("showAge")}
        />
        {watchShowAge && (
          <input
            type="number"
            className="p-1 rounded-md border border-gray-400"
            placeholder="Enter your age..."
            {...forms.register("age")}
          ></input>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-3">
        <button
          className="w-full p-5 bg-green-500 rounded-lg text-white mt-4 font-semibold"
          onClick={handleDemoData}
        >
          Demo data
        </button>
        <button
          type="submit"
          className="w-full p-5 bg-green-500 rounded-lg text-white mt-4 font-semibold"
        >
          {forms.formState.isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          {...props}
          {...field}
          className="p-4 rounded-md border border-gray-400"
        />
      )}
    ></Controller>
  );
};

export default SignUpFormHook;
