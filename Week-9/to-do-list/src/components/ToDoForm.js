import React, { useState } from "react";
// import {TextField, Button} from "@material-ui/core"

const ToDoForm = ({ addToDo }) => {
  const [toDo, setToDo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setToDo({ ...toDo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDo.task.trim()) {
      addToDo({ ...toDo, id: Math.random() });
      setToDo({ ...toDo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form mb-6 sm:w-5/12 w-11/12">
      <input
        name="task"
        type="text"
        value={toDo.task}
        onChange={handleTaskInputChange}
        className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 mr-2"
      ></input>
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
