import React, { useState } from "react";
import "./AddTask.css";
import { addTask } from "../../JS/actions/todo";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Math.random(), text: text, done: false }));
    setText("");
  };
  return (
    <form>
      {/* // second solution */}
      <div class="todoList">
        <div id="myDIV" class="header">
          <h2>My To Do List</h2>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="myInput"
            value={text}
            placeholder="Title..."
          />
          <span onClick={add} class="addBtn">
            Add
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
