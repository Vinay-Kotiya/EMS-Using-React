import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorare";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUSerData] = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // alert(localStorage.getItem("loggedInUser"));

    // alert("hello, be happy");

    if (loggedInUser) {
      const userDate = JSON.parse(loggedInUser);

      setUser(userDate.role);
      setLoggedInUserData(userDate.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    // console.log(email, password);
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      // localStorage.setItem("loggedinUser", JSON.stringify("admin"));

      // setLoggedInUser(localStorage.getItem("loggedInUser"));
      // alert(loggedInUser);
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Email and Password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard ChangeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard ChangeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
