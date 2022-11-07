// do khong phai la mot components nen dat ten chu cai dau in thuong
// can phan biet rach roi giua component(name: Upper...), function(name: lower...), hooks(name: use...)

// custom hooks cung giong nhu fuction no duoc dinh nghia bang functions,
// return ra mot gia tri cu the duoc khai bao trong components khac nhu sau: const [useDemo, ...] = useHooks();
// va ca gia tri or function con nam trong cung mot fuction cha co ten cua file .js

// day la cach dinh nghia mot custom hooks
// import { createContext, useContext, useState } from "react";

// export default function CountContext() {
//   const CountContext = createContext();

//   const CountProvider = (props) => {
//     const [count, setCount] = useState(0);
//     return (
//       <CountContext.Provider
//         value={[count, setCount]}
//         {...props}
//       ></CountContext.Provider>
//     );
//   };

//   function useCount() {
//     const context = useContext(CountContext);
//     if (typeof context === "undefined")
//       throw new Error(
//         "HandleCount and Counter must be use within a CountProvider"
//       );
//     return context;
//   }
//   return {
//     useCount,
//     CountProvider,
//   };
// }

// day la cach dinh nghia mot or nhieu fuction binh thuong
import { createContext, useContext, useState } from "react";
const CountContext = createContext();

const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
};

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error(
      "useContext must be use within a CountProvider"
    );
  return context;
}

export { useCount, CountProvider };
