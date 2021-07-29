import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserInfo {
  nickname: string;
  lastScore: number | undefined;
}

const initialState: UserInfo = { nickname: "", lastScore: undefined };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setLastScore: (state, action: PayloadAction<number>) => {
      state.lastScore = action.payload;
    },
  },
});

export const { setNickname, setLastScore } = userSlice.actions;

export const selectNickname = (state: RootState) => state.user.nickname;

export const selectLastScore = (state: RootState) => state.user.lastScore;

export const userReducer = userSlice.reducer;
