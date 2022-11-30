import { configureStore } from "@reduxjs/toolkit";
import listReducers from "./todoList";
import errorReducer from "./error";
export const store = configureStore({
  reducer: {
    todolist: listReducers,
    error: errorReducer,
  },
});
