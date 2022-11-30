import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const counterSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    edit: (state, action) => {
      state.list = state.list.map((list) => {
        if (list.id === action.payload.id) {
          return {
            id: list.id,
            title: action.payload.title,
          };
        }
        return {
          ...list,
        };
      });
    },
    remove: (state, action) => {
      state.list = state.list.filter((list) => list.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, edit, remove } = counterSlice.actions;

export default counterSlice.reducer;
