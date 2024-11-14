import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div
      id="task_list_number"
      className="flex overflow-x-auto screen mt-10 justify-between gap-5 "
    >
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h1 className="text-3xl font-semibold">{data.taskCounts.newTask}</h1>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h1 className="text-3xl font-semibold">{data.taskCounts.completed}</h1>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" rounded-xl w-[45%] py-6 px-9 font-bold bg-yellow-400">
        <h1 className="text-3xl font-semibold text-black">
          {data.taskCounts.active}
        </h1>
        <h3 className="text-xl font-medium text-black">Accepted Task</h3>
      </div>
      <div className=" rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h1 className="text-3xl font-semibold">{data.taskCounts.failed}</h1>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
