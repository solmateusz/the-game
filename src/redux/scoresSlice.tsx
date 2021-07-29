import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ScoreRecord {
  nickname: string;
  score: number;
}

const initialState: ScoreRecord[] = [];

const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    upsertScore: (state, action: PayloadAction<ScoreRecord>) => {
      const { nickname, score } = action.payload;
      const element = state.find(e => e.nickname === nickname);
      if (element) {
        element.score = score > element.score ? score : element.score;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { upsertScore: addScore } = scoresSlice.actions;

export const selectAllScores = (state: RootState) => state.scores;

export const scoresReducer = scoresSlice.reducer;
