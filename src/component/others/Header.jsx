import React, { useState } from "react";

const Header = (props) => {
  // const [userName,setUserName]=useState('')
  const logOutUser = () => {
    // alert("You want to Log Out");
    localStorage.setItem("loggedInUser", "");
    props.ChangeUser("");
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className=" text-3xl font-bold">{props.data.firstName}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 px-5 text-xl py-3 rounded text-white font-bold hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
