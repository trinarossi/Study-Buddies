import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlashcardsAsync = createAsyncThunk("flashcards/fetchAll", async () => {
  try {
    const { data } = await axios.get("/api/flashcards");
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const allFlashcardsSlice = createSlice({
  name: "flashcards",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlashcardsAsync.fulfilled, (state, action) => {
      //add flashcards to state array
      return action.payload;
    });
  },
});

export const selectFlashcards = (state) => {
  return state.flashcards;
};

export default allFlashcardsSlice.reducer;
