import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // users: usersReducer,
    // notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
