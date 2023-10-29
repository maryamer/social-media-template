import { configureStore } from "@reduxjs/toolkit";
import exploreReducer from "./explore/exploreSlice";
import todoReducer from "./todo/todoSlice";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    // todos: todoReducer,
    explorePosts: exploreReducer,
    users: usersReducer,
  },
});
