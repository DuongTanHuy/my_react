import React, { useState } from "react";

// lifting state: truyen mot state vao mot components

// const HandleValue = () => {
//   return (
//     <>
//       <DisplayValue value={value}></DisplayValue>
//     </>
//   );
// };

// const Input = ({ value, setValue }) => (
//   <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
// );

// export default HandleValue;

const HandleValue = () => {
  return (
    <Input
      render={(value) => <DisplayValue value={value}></DisplayValue>}
    ></Input>
  );
};

const Input = (props) => {
  const [value, setValue] = useState();

  return (
    <>
      <input
        className="p-3 rounded-md border-gray-500"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {typeof props.render === "function" ? props.render(value) : ""}
    </>
  );
};

const DisplayValue = ({ value }) => (
  <span className="text-3xl font-semibold text-blue-500">{value}</span>
);

export default HandleValue;
