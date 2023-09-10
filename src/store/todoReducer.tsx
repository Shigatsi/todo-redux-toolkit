import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialItems = [
  { id: "0", text: "Write redux ToDo App", done: true },
  { id: "1", text: "Update another app", done: false },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: initialItems,
  },
  reducers: {
    createItem: (state, action) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        done: false,
      });
    },
    editItem: (state, action) => {
      const editedItem = state.todos.filter(
        (item) => item.id === action.payload.id
      );

      if (action.payload.text === "") {
        state.todos = state.todos.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        editedItem[0].text = action.payload.text;
      }
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleItem: (state, action) => {
      const editedItem = state.todos.find(
        (item) => item.id === action.payload.id
      );
      editedItem && (editedItem.done = !editedItem.done);
    },
  },
});

export const { createItem, editItem, deleteItem, toggleItem } =
  todoSlice.actions;

export default todoSlice.reducer;
