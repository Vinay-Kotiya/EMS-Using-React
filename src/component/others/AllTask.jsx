import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = (callAgain) => {
  const [userData, setUSerData] = useContext(AuthContext);

  // const [userNewData, setUSerNewData] = useState(userData);
  // const loggedInUser = localStorage.getItem("loggedInUser");
  ///////////////////////////////////////////////////////////////////////
  //I will work it this problem it future
  //problem is that the newTask number is not increasing when i give a new task to employee
  // useEffect(() => {
  //   const callAgain = () => {
  //     setUSerNewData(userData);
  //   };
  //   callAgain();
  // }, []);

  // console.log();
  console.log(userData);

  return (
    <div className="bg-[#2c2c2c] w-full overflow-auto rounded mt-5 p-5 ">
      <div className=" flex bg-white justify-around py-2  mb-3 px-4 rounded">
        <h1 className="text-black font-bold text-lg">Employee Name</h1>
        <h3 className="text-black font-bold text-lg">New Task</h3>
        <h3 className="text-black font-bold text-lg">Active Task </h3>
        <h3 className="text-black font-bold text-lg">Completed</h3>
        <h3 className="text-black font-bold text-lg">Failed</h3>
      </div>
      <div className="">
        {userData.map((elem) => {
          return (
            <div
              key={elem.id}
              className=" flex border-emerald-500 bg-transparent border-2 justify-around py-2  mb-3  rounded"
            >
              <h1 className="font-bold  w-1 text-lg">{elem.firstName}</h1>
              <h3 className="font-bold  w-1 text-lg ">
                {elem.taskCounts.newTask}
              </h3>
              <h3 className="font-bold  w-1 text-lg ">
                {elem.taskCounts.active}
              </h3>
              <h3 className="font-bold  w-1 text-lg ">
                {elem.taskCounts.completed}
              </h3>
              <h3 className="font-bold  w-1 text-lg">
                {elem.taskCounts.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
