import React from "react";
import ToDo from "./ToDo";
// import {List} from "@material-ui/core"

const ToDoList = ({ toDos, toggleComplete, removeToDo }) => {
  return (
    <>
      {toDos?.map((toDo) => (
        <ToDo
          toggleComplete={toggleComplete}
          removeToDo={removeToDo}
          key={toDo.id}
          toDo={toDo}
        />
      ))}
    </>
  );
};

export default ToDoList;
