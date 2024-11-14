import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = ({ handleLogin }) => {
  const [userData, setUSerData] = useContext(AuthContext);

  // console.log("Admin Email: admin@me.com  Password: 123");

  // console.log(userData, " hello");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHeandler = (e) => {
    e.preventDefault();
    console.log("Email is ", email);
    console.log("Password is ", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen overflow-y-auto bg-black w-full flex flex-wrap justify-center items-center">
      <div className="h-[80%] w-[90%] border-2 flex  items-center bg-gray-950  border-emerald-600 py-[1%] px-[5%] rounded-xl">
        <form
          className="flex flex-col w-[100%] "
          onSubmit={(e) => {
            onSubmitHeandler(e);
          }}
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(e.target.value);
            }}
            className=" text-3xl text-white outline-none bg-transparent p-3 rounded-full border-emerald-400 border-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // console.log(e.target.value);
            }}
            className="mt-3 text-3xl text-white outline-none bg-transparent p-3 rounded-full border-emerald-400 border-2"
            type="password"
            placeholder="Enter Password"
          />
          <button className="mt-3 text-3xl font-bold text-white outline-none bg-emerald-500 hover:bg-emerald-700 p-3 rounded-full ">
            Log in
          </button>
          <h1 className="m-5 mb-1 text-emerald-500 font-bold shadow-white">
            Login Details to Test functionality
          </h1>
          <table className="w-[100%] ">
            <tr>
              <th
                colSpan="3"
                className="bg-emerald-400 py-2 mt-10 text-xl font-bold text-black rounded"
              >
                Admin Data
              </th>
            </tr>
            <tr>
              <th className=" bg-rose-400  px-[1%]">Name</th>
              <th className=" bg-rose-400  px-[1%]">Email</th>
              <th className=" bg-rose-400  px-[1%]">Password</th>
            </tr>
            <tr>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                Admin
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                admin@me.com
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                123
              </th>
            </tr>
            <tr>
              <th
                colSpan="3"
                className="bg-emerald-400 font-bold text-xl py-2 mt-10 text-black rounded"
              >
                Employee Data
              </th>
            </tr>
            <tr>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                Arjun
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                e@e.com
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                123
              </th>
            </tr>

            <tr>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                Sneha
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                e2@e.com
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                123
              </th>
            </tr>
            <tr>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                Ravi
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                e3@e.com
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                123
              </th>
            </tr>
            <tr>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                Priya
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                e4@e.com
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                123
              </th>
            </tr>
            <tr>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                Karan
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                e5@e.com
              </th>
              <th className="m-10   bg-white  text-black font-bold text-lg rounded px-3">
                123
              </th>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Login;
