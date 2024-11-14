import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="w-[300px] flex-shrink-0 rounded-xl p-5 bg-blue-400 h-full ">
      <div className="flex justify-around">
        <h1 className="bg-red-600 py-1 px-2 rounded font-bold">
          {data.category}
        </h1>
        <h3 className="text-xl">{data.taskDate}</h3>
      </div>
      <h1 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h1>
      <p className="text-base mt-2">{data.taskDescription}</p>
      <div className="flex justify-center items-center mt-4">
        <button className="bg-green-500 w-full p-2 rounded">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
