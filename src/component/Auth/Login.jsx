import React, { useState } from "react";

const Login = ({ handleLogin }) => {
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
    <div className="h-screen overflow-y-auto w-full bg-gray-950 flex justify-center items-center">
      <div className="h-50 w-50 border-2 border-emerald-600 p-24 rounded-xl">
        <form
          className="flex flex-col"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
