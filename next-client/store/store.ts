import { configureStore } from "@reduxjs/toolkit";
import coreSlice from "./core/coreSlice";

export const store = configureStore({
  reducer: {
    core: coreSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
