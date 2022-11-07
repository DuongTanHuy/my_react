import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

function AuthProvider(props) {
  const {setValue,storedValue} = useLocalStorage("users", {
    userId: 1,
    fullName: "John",
    email: "john@example.com",
  })
  const [user, setUser] = useState(storedValue);

  function setUsers() {
    setUser(null);
    setValue(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, setUsers }}
      {...props}
    ></AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("useContext is error!");
  return context;
}

export { AuthProvider, useAuth };
