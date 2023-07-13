import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReaducer";

export default configureStore({
  reducer: {
    todo: todoReducer
  }
});
