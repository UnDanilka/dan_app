import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import { todosApi } from "./TodosApi";

export default configureStore({
  reducer: {
    theme: themeReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
