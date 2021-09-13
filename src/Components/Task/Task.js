import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, statusTask } from "../../JS/actions/todo";
import "./Task.css";
import "./Edit";
import Edit from "./Edit";
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const styleText = task.done ? { textDecoration: "line-through" } : null;
  return (
    <div>
      <ul id="myUL">
        <li style={styleText}>{task.text}</li>
      </ul>
      <div>
        <Edit task={task} />
        <button onClick={() => dispatch(deleteTask(task.id))}>DELETE</button>
        <button onClick={() => dispatch(statusTask(task.id))}>
          {task.done ? "done" : "undone"}
        </button>
      </div>
    </div>
  );
};

export default Task;
