import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorare";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUSerData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUSerData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUSerData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
