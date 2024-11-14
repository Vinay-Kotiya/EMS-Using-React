import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUSerData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [newTask, setNewTask] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDate,
      taskCategory,
      taskDescription,
      newTask: true,
      active: false,
      completed: false,
      failed: false,
    });
    // const data = JSON.parse(localStorage.getItem("employees"));
    const data = userData;
    // console.log(data);

    data.forEach((elem) => {
      if (assignTo) {
        if (elem.firstName == assignTo) {
          if (newTask) {
            elem.tasks.push(newTask);
            setUSerData(elem.taskCounts.newTask++);
            // console.log(elem);
          }
        }
      } else {
        console.log("Invalid Employee Name :", { assignTo });
      }
    });

    setUSerData(data);
    // localStorage.setItem("employees", JSON.stringify(data));
    if (newTask) {
      setAssignTo("");
      setTaskCategory("");
      setTaskDate("");
      setTaskDescription("");
      setTaskTitle("");
    }
  };
  return (
    <div className="bg-[#2c2c2c] p-5 mt-10 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex items-start flex-wrap w-full justify-between"
      >
        <div className=" w-1/2 ">
          <h3 className="mb-0.5">Task Title</h3>
          <input
            required
            className="bg-transparent border-2 border-gray-300 rounded w-4/5 mb-4 outline-none p-1"
            type="text"
            placeholder="Make a UI Design"
            value={taskTitle}
            onChange={(e) => {
              // console.log(e.target.value);
              setTaskTitle(e.target.value);
            }}
          />
          <h3 className="mb-0.5">Date</h3>
          <input
            required
            className="bg-transparent border-2 border-gray-300 rounded w-4/5 mb-4 outline-none p-1"
            type="date"
            value={taskDate}
            onChange={(e) => {
              // console.log(e.target.value);
              setTaskDate(e.target.value);
            }}
          />
          <h3 className="mb-0.5">Assign to</h3>
          <input
            required
            className="bg-transparent border-2 border-gray-300 rounded w-4/5 mb-4 outline-none p-1"
            type="text"
            placeholder="Employee Name"
            value={assignTo}
            onChange={(e) => {
              // console.log(e.target.value);
              setAssignTo(e.target.value);
            }}
          />
          <h3 className="mb-0.5">Category</h3>
          <input
            required
            className="bg-transparent border-2 border-gray-300 rounded w-4/5 mb-4 outline-none p-1"
            type="text"
            value={taskCategory}
            placeholder="Design,Dev,ect"
            onChange={(e) => {
              // console.log(e.target.value);
              setTaskCategory(e.target.value);
            }}
          />
        </div>

        <div className=" flex flex-col w-2/5 items-start">
          <h3 className="mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            className="bg-transparent border-2 border-gray-300 rounded w-full h-44 mb-4 outline-none p-1"
            cols="30"
            rows="10"
            required
            value={taskDescription}
            onChange={(e) => {
              // console.log(e.target.value);
              setTaskDescription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 w-full mt-4 py-3 rounded px-5">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
