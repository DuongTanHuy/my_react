import React from "react";
import useToggle from "./useToggle";

const Editable = () => {
  const { toggle, handleToggle } = useToggle();

  //   const [edit, setEdit] = useState(false);

  //   const handleToggleEdit = () => {
  //     setEdit((edit) => !edit);
  //   };
  return (
    <div>
      <button onClick={handleToggle}>Open editable</button>
      {toggle && (
        <input className="p-3 rounded-lg border-gray-500" type="text" />
      )}
    </div>
  );
};

export default Editable;
