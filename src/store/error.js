import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
};

export const errorSlice = createSlice({
  name: "sError",
  initialState,
  reducers: {
    change: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = errorSlice.actions;

export default errorSlice.reducer;
