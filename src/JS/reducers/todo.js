import { ADD_TASK } from "../constants/todo";
import { EDIT_TASK } from "../constants/todo";
import { DELETE_TASK } from "../constants/todo";
import { SATATUS_TASK } from "../constants/todo";

// initial   state
const initialState = {
  tasks: [{ id: "", text: "First test", done: false }],
};

// pure function

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id != action.payload),
      };

    case EDIT_TASK:
      return {
        tasks: [
          state.tasks.map((el) =>
            el.id == action.payload.id
              ? { ...el, text: action.payload.newText }
              : el
          ),
        ],
      };

    case SATATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id == action.payload ? { ...el, done: !el.done } : el
        ),
      };

    default:
      return state;
  }
};
export default todoReducer;
