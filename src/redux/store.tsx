import { configureStore } from "@reduxjs/toolkit";
import { scoresReducer } from "./scoresSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    scores: scoresReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
