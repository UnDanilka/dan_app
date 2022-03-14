import { createSlice } from "@reduxjs/toolkit";
import { IthemeState } from "../types";

const initialState: IthemeState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLight(state) {
      state.theme = "light";
    },
    setDark(state) {
      state.theme = "dark";
    },
  },
});

export const { setLight, setDark } = themeSlice.actions;

export default themeSlice.reducer;
