import React from "react";
import AddTask from "../../components/AddTask";
import TaskList from "../../components/TaskList";


const TaskApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-white rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Task Management App
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskApp;
