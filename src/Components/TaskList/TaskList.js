import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
const TaskList = () => {
  const tasklist = useSelector((state) => state.todoReducer.tasks);

  return (
    <div>
      {tasklist.map((el) => (
        <Task task={el} key={el.id} />
      ))}
    </div>
  );
};

export default TaskList;
