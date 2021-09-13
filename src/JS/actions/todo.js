import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SATATUS_TASK,
} from "../constants/todo";

export const addTask = (newTask) => {
  return { type: ADD_TASK, payload: newTask };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const editTask = (id, newText) => {
  return { type: EDIT_TASK, payload: { id, newText } };
};

export const statusTask = (id) => {
  return { type: SATATUS_TASK, payload: id };
};
