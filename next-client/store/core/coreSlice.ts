import { createSlice } from "@reduxjs/toolkit";

export interface CoreState {
  theme: "dark" | "light";
}

const initialState: CoreState = {
  theme: "light",
};

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = coreSlice.actions;

export default coreSlice.reducer;
