import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  // console.log(data.firstName);
  const data = { firstName: "Admin" };
  return (
    <div id="adminPage" className="h-screen w-screen p-10 overflow-auto">
      <Header ChangeUser={props.ChangeUser} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
