import React from "react";

const ToDo = ({ toDo, toggleComplete, removeToDo }) => {
  const handleToggleClick = () => {
    toggleComplete(toDo.id);
  };
  const handleRemoveClick = () => {
    removeToDo(toDo.id);
  };
  return (
    <>
      <div className="p-1 sm:w-1/2 w-full text-left">
        <div
          style={{ position: "relative" }}
          className={`rounded flex py-3 px-10 h-full items-center ${
            toDo.completed
              ? "bg-slate-300 text-slate-500"
              : "bg-slate-200 text-slate-800"
          }`}
        >
          <input
            name="checkbox"
            type="checkbox"
            checked={toDo.completed}
            onChange={handleToggleClick}
            style={{
              position: "absolute",
              left: 0,
              height: "22px",
              width: "22px",
            }}
            className="ml-2 my-auto cursor-pointer"
          ></input>
          <span
            className="title-font font-medium"
            style={{
              textDecoration: toDo.completed ? "line-through" : null,
            }}
          >
            {toDo.task}
          </span>
          <svg
            className="svg-icon mr-2 cursor-pointer"
            viewBox="0 0 20 20"
            style={{
              position: "absolute",
              right: 0,
              fontSize: "20px",
              width: "1em",
              height: "1em",
            }}
            onClick={handleRemoveClick}
          >
            <path
              fill="rgb(244, 63, 94)"
              d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ToDo;
