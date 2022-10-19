import React from "react";
import lodash from "lodash";
import useHandleChange from "../../hooks/useHandleChange";
import { useState } from "react";

const Form = () => {
  // const [fullName, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [number, setNumber] = useState("");

  // const handleChange = (event) => {
  //   setFullName(event.target.value);
  // };
  // const handleTextareaChange = (event) => {
  //   setMessage(event.target.value);
  // };
  // const handleSelectChange = (event) => {
  //   setNumber(event.target.value);
  // };
  const { handleChange, values } = useHandleChange({
    fullName: "",
    email: "",
    // gender: false,
  }); // co the de empty
  const [errorMessage, setErrorMessage] = useState(""); // co the dung attribute required
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullName === "") {
      setErrorMessage("* Please enter your full name!");
      console.log(values.fullName);
    } else setErrorMessage("");
  };

  return (
    <div className="p-5">
      <div className="max-w-[300px]">
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
          {/*autoomplete = 'off': thuoc tinh cua form*/}
          {/* {fullName} */}
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              name="fullName"
              className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
              placeholder="Enter your name..."
              onChange={lodash.debounce(handleChange, 500)}
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-[16px]">{errorMessage}</p>
          )}
          <input
            type="email"
            name="email"
            className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
            placeholder="Enter your email..."
            onChange={lodash.debounce(handleChange, 500)}
          />
          <input type="checkbox" name="gender" onChange={handleChange} />
          <button
            type="submit"
            className="max-w-[300px] bg-green-500 p-3 rounded-lg text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
      {/* <div className="flex gap-x-3">
        {errorMessage && (
          <p className="text-red-500 text-[16px]">{errorMessage}</p>
        )}
      </div>truong hop cac the input nam ngang */}
      {/* <div>
        {message}
        <textarea
          name="message"
          className="block w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
          placeholder="Enter your message..."
          onChange={lodash.debounce(handleTextareaChange, 500)}
        ></textarea>
        {number}
        <select name="number" onChange={handleSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div> */}
    </div>
  );
};

export default Form;
